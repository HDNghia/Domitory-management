namespace Server.Models
{
    public class University
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public  ICollection<Student> Students { get; set; }
    }
}
