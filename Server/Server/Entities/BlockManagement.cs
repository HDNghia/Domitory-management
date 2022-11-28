namespace Server.Models
{
    public class BlockManagement
    {
        public int BlockId { get; set; }
        public int ManagerId { get; set; }
        public Block  Block { get; set; }
        public Manager Manager { get; set; }

    }
}
