namespace Server.Models
{
    public class AuthenticateResponse
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public Role Role { get; set; }
        public string Token { get; set; }

        public AuthenticateResponse(Account user, string token)
        {
            Id = user.Id;
            Username = user.UserName;
            Role = user.Role;
            Token = token;
        }
    }
}
