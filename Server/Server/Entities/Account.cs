namespace Server.Models
{
    public class Account
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string PasswordHash { get; set; }
        public Role Role { get; set; }
    }
    public enum Role
    {
        Admin,
        Manager,
        Student

    }
}
