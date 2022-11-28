namespace Server.Models
{
    public class Furniture
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public float Price { get; set; }
        public RepairDetail RepairDetail { get; set; }

    }
}
