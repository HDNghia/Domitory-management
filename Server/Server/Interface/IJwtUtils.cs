using Server.Models;

namespace Server.Interface
{
    public interface IJwtUtils
    {
        public string GenerateJwtToken(Account account);
        public int? ValidateJwtToken(string token);
    }
}
