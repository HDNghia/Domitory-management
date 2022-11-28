using AutoMapper;
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

        public IEnumerable<Student> GetAllStudents()
        {
            return _context.Students;
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
