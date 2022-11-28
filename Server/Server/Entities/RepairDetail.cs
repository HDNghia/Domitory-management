using System.Reflection.Metadata.Ecma335;

namespace Server.Models
{
    public class RepairDetail
    {
        public int Id { get; set; }
        public DateTime RepairDate { get; set; }
        public float RepairFee { get; set; }
        public Room Room { get; set; }
        public ICollection<Furniture> Furnitures{ get; set; }
    }
}
