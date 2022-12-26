using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Server.Models
{
    public class ElectricWaterLogResponse
    {


            public int Id { get; set; }
            [DataType(DataType.Date)]
            public DateTime LogDate { get; set; }
            public int ElectricNew { get; set; }
            public int ElectricOld { get; set; }
            public int WaterOld { get; set; }
            public int WaterNew { get; set; }
           
            public int WaterUse { get; set; }
          
            public int ElectricUse { get; set; }
           
            public int ElectricFee { get; set; }
            
            public int WaterFee { get; set; }
          
            public int TotalFee { get; set; }
            
            public bool FeeStatus { get; set; }
            public RoomDTO Room { get; set; }
        
    }
}
