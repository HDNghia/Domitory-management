namespace Server.Models
{
    public class RoomType
    {
        public int Id { get; set; }
        public int NumberOfSLot { get; set; }
        public bool Furniture { get; set; }
        public int DomitoryFee { get; set; }
        public ICollection<Room> Rooms { get; set; }
    }
}
