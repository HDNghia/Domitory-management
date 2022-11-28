using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Server.Models
{
    public class CreateRegisterRoom
    {
        public int StudentId { get; set; }
        public int RoomId { get; set; }
        [JsonIgnore]
        [DataType(DataType.Date)]
        public DateTime DateBegin { get; set; }
        [JsonIgnore]
        [DataType(DataType.Date)]
        public DateTime DateEnd { get; set; }
        public int NumberOfMonth { get; set; }
        [JsonIgnore]
        public int DomitoryFee { get; set; }
        [JsonIgnore]
        public bool DomitoryFeeStatus { get; set; }

        [JsonIgnore]
        public bool Status { get; set; }
    }
}
