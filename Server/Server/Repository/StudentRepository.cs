using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.Interface;
using Server.Models;
using BCryptNet = BCrypt.Net.BCrypt;

namespace Server.Repository
{
    public class StudentRepository : IStudent
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public StudentRepository(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public void CreateStudent(CreateStudent model)
        {
            var school = _context.Universities.Find(model.UniversityId);
            if (school == null) {
                throw new KeyNotFoundException("University not exist");
            }
            var account = new Account()
            {
                UserName = model.Email,
                PasswordHash = BCryptNet.HashPassword("123456"),
                Role = Role.Student,
            };
            var student = _mapper.Map<Student>(model);
            student.account = account;
            student.status = true;
            student.University = school;
            
            _context.Students.Add(student);
            _context.SaveChanges();
        }

        public IEnumerable<StudentDTO> GetAllStudents()
        {
            var students = _context.Students
                .Include(s => s.University)
                .Include(s => s.RegisterRooms.Where(r => r.Status == true))
                .Include(s=>s.RegisterRooms)
                    .ThenInclude(r => r.Room)
                .ToList();

            return _mapper.Map<List<StudentDTO>>(students);
        }

        public StudentDTO GetStudentByAccountId(int accountId)
        {
            if (_context.Accounts.Find(accountId) == null)
                throw new KeyNotFoundException("Account not found");
            var Student = _context.Students.Where(s => s.account.Id == accountId)
                .Include(s => s.University)
                .Include(s => s.RegisterRooms.Where(r => r.Status == true))
                .Include(s => s.RegisterRooms)
                    .ThenInclude(r => r.Room)
                .FirstOrDefault();
            
            
            return _mapper.Map<StudentDTO>(Student);
        }

        //public IEnumerable<Student> GetStudentByBlock(int blockId)
        //{
        //    throw new NotImplementedException();
        //}

        public Student GetStudentById(int id)
        {
            var student = _context.Students.Find(id);
            if (student == null)
                throw new KeyNotFoundException("Student not found");
            return student;
        }

        public IEnumerable<Student> GetStudentByRoom(int roomId)
        {
            var student = _context.RegisterRooms.Where(r => r.RoomId == roomId && r.Status == true )
                .Select(r => r.Student);
            if(student == null)
                throw new KeyNotFoundException("Student not found");
            return student;
        }

        public void UpdateStudent(int studentId, UpdateStudent model)
        {
            var student = GetStudentById(studentId);
            var school = _context.Universities.Find(model.UniversityId);
            if (school == null)
            {
                throw new KeyNotFoundException("University not exist");
            }
            


            _mapper.Map(model, student);
            _context.Students.Update(student);
            _context.SaveChanges();

        }
    }
}
