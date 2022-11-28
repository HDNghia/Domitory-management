using Microsoft.Extensions.Options;
using BCrypt.Net;
using Server.Data;
using Server.Helpers;
using Server.Interface;
using Server.Models;


namespace Server.Repository
{
    public class AccountRepository : IAccountService
    {
        private DataContext _context;
        private IJwtUtils _jwtUtils;
        private readonly AppSettings _appSettings;

        public AccountRepository(
            DataContext context,
            IJwtUtils jwtUtils,
            IOptions<AppSettings> appSettings)
        {
            _context = context;
            _jwtUtils = jwtUtils;
            _appSettings = appSettings.Value;
        }


        public AuthenticateResponse Authenticate(AuthenticateRequest model)
        {
            var account = _context.Accounts.SingleOrDefault(x => x.UserName == model.UserName);

            // validate
            if (account == null || !BCrypt.Net.BCrypt.Verify(model.Password, account.PasswordHash))
                throw new AppException("Username or password is incorrect");

            // authentication successful so generate jwt token
            var jwtToken = _jwtUtils.GenerateJwtToken(account);

            return new AuthenticateResponse(account, jwtToken);
        }

        public IEnumerable<Account> GetAll()
        {
            return _context.Accounts;
        }

        public Account GetById(int id)
        {
            var user = _context.Accounts.Find(id);
            if (user == null) throw new KeyNotFoundException("User not found");
            return user;
        }

        IEnumerable<Account> IAccountService.GetAll()
        {
            throw new NotImplementedException();
        }

        Account IAccountService.GetById(int id)
        {
            throw new NotImplementedException();
        }
    }
}
