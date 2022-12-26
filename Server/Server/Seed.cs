using Server.Data;
using Server.Models;
using System.Runtime.ExceptionServices;
using static System.Reflection.Metadata.BlobBuilder;
using BCryptNet = BCrypt.Net.BCrypt;
namespace Server
{
    public class Seed
    {
        private readonly DataContext dataContext;
        public Seed(DataContext context)
        {
            this.dataContext = context;
        }
        public void SeedDataContext() {
            if (!dataContext.Accounts.Any()) {
                var Account = new List<Account>
                {
                    new Account(){ 
                        UserName ="ManagerTest",
                        PasswordHash =BCryptNet.HashPassword("manager"),
                        Role= Role.Manager    
                    },
                    new Account(){
                        UserName ="AdminTest",
                        PasswordHash =BCryptNet.HashPassword("admin"),
                        Role= Role.Admin
                    },
                    new Account(){
                        UserName ="Student",
                        PasswordHash =BCryptNet.HashPassword("student"),
                        Role= Role.Student
                    }
                };
                dataContext.Accounts.AddRange(Account);
                dataContext.SaveChanges();
            }

            if (!dataContext.Rooms.Any())
            {

                var RoomType1 = new RoomType()
                {
                    NumberOfSLot = 4,
                    Furniture = true,
                    DomitoryFee = 180000
                };
                var RoomType2 = new RoomType()
                {
                    NumberOfSLot = 4,
                    Furniture = false,
                    DomitoryFee = 140000
                };
                var RoomType3 = new RoomType()
                {
                    NumberOfSLot = 6,
                    Furniture = true,
                    DomitoryFee = 100000
                };
                var RoomType4 = new RoomType()
                {
                    NumberOfSLot = 6,
                    Furniture = false,
                    DomitoryFee = 80000
                };
                var Blocks = new List<Block>
                    {
                        new Block(){
                            Name = "A1",
                            Room = new List<Room>(){
                                new Room() {
                                    Name = "A1-001",
                                    SlotRemain=4,
                                    Status = true,
                                    RoomType = RoomType1

                                },
                                 new Room() {
                                    Name = "A1-002",
                                    SlotRemain=4,
                                    Status = true,
                                    RoomType = RoomType2
                                 },
                                 new Room() {
                                    Name = "A1-003",
                                    SlotRemain=6,
                                    Status = true,
                                    RoomType = RoomType3
                                 },
                                  new Room() {
                                    Name = "A1-003",
                                    SlotRemain=6,
                                    Status = true,
                                    RoomType = RoomType4
                                 }
                            }
                        },
                        new Block(){
                            Name = "A2",
                            Room = new List<Room>(){
                                new Room() {
                                    Name = "A2-001",
                                    SlotRemain=4,
                                    Status = true,
                                    RoomType = RoomType1

                                },
                                 new Room() {
                                    Name = "A2-002",
                                    SlotRemain=4,
                                    Status = true,
                                    RoomType = RoomType2
                                 },
                                 new Room() {
                                    Name = "A2-003",
                                    SlotRemain=6,
                                    Status = true,
                                    RoomType = RoomType3
                                 },
                                  new Room() {
                                    Name = "A2-004",
                                    SlotRemain=6,
                                    Status = true,
                                    RoomType = RoomType4
                                 }
                            }
                        }


                };

                dataContext.Blocks.AddRange(Blocks);
                dataContext.SaveChanges();
            }

            if (!dataContext.Universities.Any())
            {
                var university = new List<University> {
                    new University() {
                       Name = "Trường Đại Học Công Nghệ Thông Tin"
                    },
                    new University() {
                       Name = "Trường Đại Học Bách Khoa"
                    },
                    new University() {
                       Name = "Trường Đại Học Khoa Học Tự Nhiên"
                    },
                    new University() {
                       Name = "Trường Đại Học Kinh Tế Luật"
                    }
                };
                dataContext.Universities.AddRange(university);
                dataContext.SaveChanges();
            }

            if (!dataContext.Students.Any()) {
                var students = new List<Student>
                {
                    new Student() {
                        LastName ="Tuan",
                        FirstName="Trung",
                        BirthDate = new DateTime(2002,02,02),
                        Gender = true,
                        Ethnic = "Kinh",
                        Nationnality = "Việt Nam",
                        PhoneNumber = "02322222",
                        HomeAddress = "Xuân Lộc, Đồng Nai",
                        MainAddress = "KTXA, Linh Trung, Thủ Đức",
                        Email = "tuan@gmail.com",
                        Avartar = Convert.FromBase64String("test"),
                        IdentifyCardNumber = "00020202020",
                        UniversitysutdentId ="20522068",
                        Faculty = "Information system",
                        Major = "Information system",
                        SchoolYear = "2020-2024",
                        RelatedPersonName = "Ba",
                        RelatedPersonPhoneNumber = "12344",
                        status = true,
                        University = dataContext.Universities.Where(u=>u.Id==1).FirstOrDefault(),
                        account = new Account{
                            UserName ="tuan@gmail.com",
                            PasswordHash =BCryptNet.HashPassword("123456"),
                            Role= Role.Student
                        }
                    },
                     new Student() {
                        LastName ="Dang",
                        FirstName="Ngia",
                        BirthDate = new DateTime(2002,02,02),
                        Gender = true,
                        Ethnic = "Kinh",
                        Nationnality = "Việt Nam",
                        PhoneNumber = "02322222",
                        HomeAddress = "Xuân Lộc, Đồng Nai",
                        MainAddress = "KTXA, Linh Trung, Thủ Đức",
                        Email = "dangnghia@gmail.com",
                        Avartar = Convert.FromBase64String("test"),
                        IdentifyCardNumber = "00020202020",
                        UniversitysutdentId ="20522068",
                        Faculty = "Information system",
                        Major = "Information system",
                        SchoolYear = "2020-2024",
                        RelatedPersonName = "Ba",
                        RelatedPersonPhoneNumber = "12344",
                        status = true,
                        University = dataContext.Universities.Where(u=>u.Id==1).FirstOrDefault(),
                        account = new Account{
                            UserName ="dangnghia@gmail.com",
                            PasswordHash =BCryptNet.HashPassword("123456"),
                            Role= Role.Student
                        }
                    },
                      new Student() {
                        LastName ="Bao",
                        FirstName="An",
                        BirthDate = new DateTime(2002,02,02),
                        Gender = true,
                        Ethnic = "Kinh",
                        Nationnality = "Việt Nam",
                        PhoneNumber = "02322222",
                        HomeAddress = "Xuân Lộc, Đồng Nai",
                        MainAddress = "KTXA, Linh Trung, Thủ Đức",
                        Email = "baoan@gmail.com",
                        Avartar = Convert.FromBase64String("test"),
                        IdentifyCardNumber = "00020202020",
                        UniversitysutdentId ="20522068",
                        Faculty = "Information system",
                        Major = "Information system",
                        SchoolYear = "2020-2024",
                        RelatedPersonName = "Ba",
                        RelatedPersonPhoneNumber = "12344",
                        status = true,
                        University = dataContext.Universities.Where(u=>u.Id==2).FirstOrDefault(),
                        account = new Account{
                            UserName ="baoan@gmail.com",
                            PasswordHash =BCryptNet.HashPassword("123456"),
                            Role= Role.Student
                        }

                    },
                       new Student() {
                        LastName ="Thao",
                        FirstName="Trang",
                        BirthDate = new DateTime(2002,02,02),
                        Gender = true,
                        Ethnic = "Kinh",
                        Nationnality = "Việt Nam",
                        PhoneNumber = "02322222",
                        HomeAddress = "Xuân Lộc, Đồng Nai",
                        MainAddress = "KTXA, Linh Trung, Thủ Đức",
                        Email = "thaotrang@gmail.com",
                        Avartar = Convert.FromBase64String("test"),
                        IdentifyCardNumber = "00020202020",
                        UniversitysutdentId ="20522068",
                        Faculty = "Information system",
                        Major = "Information system",
                        SchoolYear = "2020-2024",
                        RelatedPersonName = "Ba",
                        RelatedPersonPhoneNumber = "12344",
                        status = true,
                        University = dataContext.Universities.Where(u=>u.Id==3).FirstOrDefault(),
                        account = new Account{
                            UserName ="thaotrang@gmail.com",
                            PasswordHash =BCryptNet.HashPassword("123456"),
                            Role= Role.Student
                        }
                       }
                };
                dataContext.Students.AddRange(students);
                dataContext.SaveChanges();
            }
                
        }
    }
}
