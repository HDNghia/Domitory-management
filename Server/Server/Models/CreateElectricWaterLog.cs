using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Server.Models
{
    public class CreateElectricWaterLog
    {
        
        [JsonIgnore]
        [DataType(DataType.Date)]
        public DateTime LogDate { get; set; }
        public int ElectricNew { get; set; }
        public int ElectricOld { get; set; }
        public int WaterOld { get; set; }
        public int WaterNew { get; set; }
        [JsonIgnore]
        public int WaterUse { get; set; }
        [JsonIgnore]
        public int ElectricUse { get; set; }
        [JsonIgnore]
        public int ElectricFee { get; set; }
        [JsonIgnore]
        public int WaterFee { get; set; }
        [JsonIgnore]
        public int TotalFee { get; set; }
        [JsonIgnore]
        public bool FeeStatus { get; set; }
        [JsonIgnore]
        public Room? Room{ get; set; }


    }
}
    