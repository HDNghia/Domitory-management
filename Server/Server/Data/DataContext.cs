using Microsoft.EntityFrameworkCore;
using Server.Models;

namespace Server.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { 
        
        }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Block> Blocks { get; set; }
        public DbSet<BlockManagement> BlockManagements { get; set; }
        public DbSet<ElectricWaterlog> ElectricWaterlogs { get; set; }
        public DbSet<Furniture> Furnitures { get; set; }
        public DbSet<Manager> Managers { get; set; }
        public DbSet<RegisterRoom> RegisterRooms { get; set; }
        public DbSet<RepairDetail> RepairDetails { get; set; }
        public DbSet<RoomType> RoomTypes { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<University> Universities { get; set; }
        public DbSet<Room>Rooms { get; set; }

       

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<BlockManagement>()
               .HasKey(bm => new { bm.ManagerId, bm.BlockId });
            modelBuilder.Entity<BlockManagement>()
               .HasOne(bm => bm.Manager)
               .WithMany(m => m.BlockManagements)
               .HasForeignKey(m => m.ManagerId);
            modelBuilder.Entity<BlockManagement>()
               .HasOne(bm => bm.Block)
               .WithMany(b => b.BlockManagements)
               .HasForeignKey(b => b.BlockId);

            modelBuilder.Entity<RegisterRoom>()
                .HasKey(rr => new { rr.StudentId, rr.RoomId });
            modelBuilder.Entity<RegisterRoom>()
                .HasOne(rr => rr.Room)
                .WithMany(r => r.RegisterRooms)
                .HasForeignKey(rr => rr.RoomId);
            modelBuilder.Entity<RegisterRoom>()
                .HasOne(rr => rr.Student)
                .WithMany(s => s.RegisterRooms)
                .HasForeignKey(rr => rr.RoomId);
           
        }


    }
}
