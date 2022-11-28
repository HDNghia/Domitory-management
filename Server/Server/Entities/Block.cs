namespace Server.Models
{
    public class Block
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public  ICollection<Room> Room { get; set; }
        public ICollection<BlockManagement> BlockManagements { get; set; }
    }
}
