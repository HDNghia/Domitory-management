using AutoMapper;
using Microsoft.OpenApi.Validations;
using Server.Data;
using Server.Helpers;
using Server.Interface;
using Server.Models;

namespace Server.Repository
{
    public class RegisterRoomRepository : IRegisterRoom
    {

        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public RegisterRoomRepository(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public void CreateRegisterRoom( CreateRegisterRoom model)
        {
           if(_context.Students.Find(model.StudentId) == null)
                throw new KeyNotFoundException("Student not exist");

            var room = _context.Rooms.Find(model.RoomId);
            if (room == null)
                throw new KeyNotFoundException("Room not exist");

            // check slotremain
            var slotRemain = room.SlotRemain;
            if (slotRemain <= 0)
                throw new AppException("room full, please select another room");

            room.SlotRemain = slotRemain - 1;


            var feePerMotnh = _context.Rooms.Where(r => r.Id == model.RoomId)
                .Select(r => r.RoomType.DomitoryFee).Single();

            var registerRoom = _mapper.Map<RegisterRoom>(model);
            var feeTotal = feePerMotnh * registerRoom.NumberOfMonth;

            registerRoom.DateBegin = DateTime.Today;
            registerRoom.DateEnd = AddMonthToEndOfMonth(DateTime.Today,registerRoom.NumberOfMonth);
            registerRoom.Status = true;
            registerRoom.DomitoryFeeStatus = false;

            _context.Rooms.Update(room);
            _context.RegisterRooms.Add(registerRoom);
            _context.SaveChanges();


        }

        public IEnumerable<RegisterRoom> GetRegisterRoomByRoom(int roomId)
        {
            var registerRoom = _context.RegisterRooms.Where(r => r.RoomId == roomId).ToList();
            if(registerRoom == null)
                throw new KeyNotFoundException("register room not found");
                
            return registerRoom;

        }

      

        public IEnumerable<RegisterRoom> GetRegiterRoomByStudent(int studentId)
        {
            var registerRoom = _context.RegisterRooms.Where(r => r.StudentId == studentId).ToList();
            if (registerRoom == null)
                throw new KeyNotFoundException("register room not found");
            return registerRoom;
        }


        //helper
        private static DateTime AddMonthToEndOfMonth(DateTime date, int numberOfMonths)
        {
            DateTime nextMonth = date.AddMonths(numberOfMonths);

            if (date.Day != DateTime.DaysInMonth(date.Year, date.Month)) //is last day in month
            {
                //any other day then last day
                return nextMonth;
            }
            else
            {
                //if date was end of month, add remaining days
                int addDays = DateTime.DaysInMonth(nextMonth.Year, nextMonth.Month) - nextMonth.Day;
                return nextMonth.AddDays(addDays);
            }
        }

        public RegisterRoom GetRegisterRoom(int roomId, int studentId)
        {
            var registerRoom = _context.RegisterRooms.Find(roomId, studentId);
            if(registerRoom == null)
                throw  new KeyNotFoundException("register room not found");
            return registerRoom;
        }

        public void UpdateRegisterRoom(int studentId, int roomId, UpdateRegisterRoom model)
        {
            var regigterRoom = GetRegisterRoom(studentId, roomId);

            //Change Room for student
            if (roomId != model.RoomId) {
                //Old room
                var oldRoom = _context.Rooms.Find(model.RoomId);
                if (oldRoom == null)
                    throw new KeyNotFoundException("Room not exist");
                var slotRemainOldRoom = oldRoom.SlotRemain;

                oldRoom.SlotRemain = slotRemainOldRoom + 1;

                //New room
                var room = _context.Rooms.Find(roomId);
                if (room == null)
                    throw new KeyNotFoundException("Room not exist");
                var slotRemain = room.SlotRemain;
                if (slotRemain <= 0)
                    throw new AppException("room full, please select another room");

                room.SlotRemain = slotRemain - 1;
                _context.Rooms.Update(oldRoom);
                _context.Rooms.Update(room);
            }
           




            var feePerMotnh = _context.Rooms.Where(r => r.Id == model.RoomId)
               .Select(r => r.RoomType.DomitoryFee).Single();

            var feeTotal = feePerMotnh * model.NumberOfMonth;

          
            regigterRoom.DateEnd = AddMonthToEndOfMonth(DateTime.Today, regigterRoom.NumberOfMonth);
            regigterRoom.DomitoryFee = feeTotal;
            _mapper.Map(model, regigterRoom);
            _context.Update(regigterRoom);
            _context.SaveChanges();
        }

        public IEnumerable<RegisterRoom> GetAllRegisterRoom()
        {
            return _context.RegisterRooms;
        }
    }
}
