namespace Server.Models
{
    public class Manager
    {
        public int Id { get; set; }
        public string LastName { get; set; }
        public string  FirstName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Email { get; set; }
        public string IdentiFyCardNumber { get; set; }
        public string PhoneNumber { get; set; }
        public string Address { get; set; }
        public bool Gender { get; set; }
        public int IdCard { get; set; }
        public bool Status { get; set; }
        //public  MyProperty { get; set; }
        public Account Account { get; set; }
        public ICollection<BlockManagement> BlockManagements { get; set; }
    }
}
