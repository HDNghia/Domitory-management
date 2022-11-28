namespace Server.Models
{
    public class ElectricWaterlog
    {
        public int Id { get; set; }
        public DateTime LogDate { get; set; }
        public int ElectricNew { get; set; }
        public int ElectricOld { get; set; }
        public int WaterOld { get; set; }
        public int WaterNew { get; set; }
        public int  WaterUse { get; set; }
        public int ElectricUse { get; set; }
        public int ElectricFee { get; set; }
        public int WaterFee { get; set; }
        public int TotalFee { get; set; }
        public Boolean FeeStatus { get; set; }
        public Room Room { get; set; }

    }
}
