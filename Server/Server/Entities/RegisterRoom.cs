using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
    public class RegisterRoom
    {
        //[ScaffoldColumn(false)]
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int StudentId { get; set; }
        public int RoomId { get; set; }
        public DateTime DateBegin { get; set; }
        public DateTime DateEnd { get; set; }
        public int NumberOfMonth { get; set; }
        public int DomitoryFee { get; set; }
        public bool DomitoryFeeStatus { get; set; }
        public bool  Status { get; set; }
        public Room Room { get; set; }
        public Student Student { get; set; }
    }
}
