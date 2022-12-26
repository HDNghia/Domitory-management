using AutoMapper;
using Microsoft.IdentityModel.Tokens;
using Server.Data;
using Server.Helpers;
using Server.Interface;
using Server.Models;
using BCryptNet = BCrypt.Net.BCrypt;

namespace Server.Repository
{
    public class ManagerRepository:IManager
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public  ManagerRepository(DataContext context,   IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public void CreateManager(CreateManager model)
        {
            if(_context.Managers.Any(x => x.Email == model.Email))
                throw new AppException("Manager with the email '" + model.Email + "' already exists");

            var account = new Account()
            {
                UserName = model.Email,
                PasswordHash = BCryptNet.HashPassword(model.IdCard.ToString()),
                Role = Role.Manager,
            };

            var manager = _mapper.Map<Manager>(model);
            manager.Account = account;
            //manager.Account.= manager.Email;
            //manager.Account.PasswordHash = BCryptNet.HashPassword(manager.IdCard.ToString());
            //manager.Account.Role = Role.Manager;
            manager.Status = true;
           
           
            _context.Managers.Add(manager);
            _context.SaveChanges();


        }

        public IEnumerable<Manager> GetAllManager()
        {
            return _context.Managers;
        }

        public Manager GetManagerByAccount(int id)
        {
            return _context.Managers.Where(m => m.Account.Id == id).FirstOrDefault();
        }

        public Manager GetManagerById(int id)
        {
            var manager = _context.Managers.Find(id);
            if (manager == null) throw new KeyNotFoundException("User not found");
            return manager;
        }

        public IEnumerable<Manager> GetManagerByIdBock(int BlockId)
        {
                 var manager = _context.BlockManagements.Where(b => b.Block.Id == BlockId)
                .Select(m => m.Manager);

            if (manager == null)
                throw new KeyNotFoundException("Manager not found");

            return manager;
        }


        public void UpdateManager(int id,UpdateManager model)
        {
            var student =  GetManagerById(id);
            if (model.Email != student.Email && _context.Managers.Any(x => x.Email == model.Email))
                throw new AppException("User with the email '" + model.Email + "' already exists");

            _mapper.Map(model, student);
            _context.Managers.Update(student);
            _context.SaveChanges();
        }
       
    }
}
