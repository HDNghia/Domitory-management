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

            if (_context.RegisterRooms
                .Where(r => r.StudentId == model.StudentId && r.Status == true)
                .Count() >= 1) {
                throw new AppException(" A Student can only register one rooom");
           }

            // check slotremain
            var slotRemain = room.SlotRemain;
            if (slotRemain <= 0)
                throw new AppException("room full, please select another room");

            if (model.NumberOfMonth <= 0)
            {
                throw new AppException("Number of month error");
            }

            room.SlotRemain = slotRemain - 1;


            var feePerMotnh = _context.Rooms.Where(r => r.Id == model.RoomId)
                .Select(r => r.RoomType.DomitoryFee).SingleOrDefault();

            var registerRoom = _mapper.Map<RegisterRoom>(model);
            var feeTotal = feePerMotnh * registerRoom.NumberOfMonth;

            registerRoom.DomitoryFee = feeTotal;
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

        //helper
        private  void ValidateRoom(RegisterRoom model) {
            if (DateTime.Compare(model.DateBegin, model.DateEnd) >= 0 && model.Status == true) {
                model.Status = false;
                //var room = _context.Rooms.Where(r => r.Id == model.RoomId).FirstOrDefault();
                //model.Room.SlotRemain -= 1;
            
                _context.RegisterRooms.Update(model);
                _context.SaveChanges();
                
            }
            
        }

        public RegisterRoom GetRegisterRoom(int Id)
        {
            var registerRoom = _context.RegisterRooms.Find(Id);
            if (registerRoom == null)
                throw new KeyNotFoundException("Register Room not exist");
            return registerRoom;
        }

        public void UpdateRegisterRoom(int Id, UpdateRegisterRoom model)
        {
            var regigterRoom = GetRegisterRoom(Id);
          

            //Change student room
            if (regigterRoom.RoomId != model.RoomId) {
                //Old room
                var oldRoom = _context.Rooms.Find(regigterRoom.RoomId);
                if (oldRoom == null)
                    throw new KeyNotFoundException("Room not exist");
                var slotRemainOldRoom = oldRoom.SlotRemain;

                oldRoom.SlotRemain = slotRemainOldRoom + 1;

                //New room
                var room = _context.Rooms.Find(model.RoomId);
                if (room == null)
                    throw new KeyNotFoundException("Room not exist");
                var slotRemain = room.SlotRemain;
                if (slotRemain <= 0)
                    throw new AppException("Room full, please select another room");
                    
                room.SlotRemain = slotRemain - 1;
                _context.Rooms.Update(oldRoom);
                _context.Rooms.Update(room);
            }          
                     
            if (model.NumberOfMonth <= 0) {
                throw new AppException("Number of month error");
            }
            var feePerMotnh = _context.Rooms.Where(r => r.Id == model.RoomId)
               .Select(r => r.RoomType.DomitoryFee).Single();
            var feeTotal = feePerMotnh * model.NumberOfMonth;
            model.DateEnd = AddMonthToEndOfMonth(DateTime.Today, model.NumberOfMonth);
            model.DomitoryFee = feeTotal;
            _mapper.Map(model, regigterRoom);
            _context.Update(regigterRoom);
            _context.SaveChanges();
        }

        public IEnumerable<RegisterRoomDTO> GetAllRegisterRoom()
        {
            var rsrList = _context.RegisterRooms.ToList();
            foreach (var model in rsrList)
            {
                if (DateTime.Compare(model.DateBegin, model.DateEnd) >= 0 && model.Status == true)
                {
                    model.Status = false;
                    var room = _context.Rooms.Where(r => r.Id == model.RoomId).FirstOrDefault();
                    //model.Room.SlotRemain -= 1;
                    room.SlotRemain += 1;
                    _context.Rooms.Update(room);
                    _context.RegisterRooms.Update(model);
                    _context.SaveChanges();

                }

            }
            return _mapper.Map<List<RegisterRoomDTO>>(rsrList)  ;
        }

        public IEnumerable<RegisterRoomDTO> GetRegisterRoomByRoomIdStudentId(int RoomId, int StudentId)
        {
            if (_context.Rooms.Find(RoomId) == null) {
                throw new KeyNotFoundException("Room not exist");
            }
            if (_context.Students.Find(StudentId) == null)
            {
                throw new KeyNotFoundException("Student not exist");
            }

            var rr = _context.RegisterRooms.Where(rr=>rr.RoomId == RoomId && rr.StudentId == StudentId)
                .ToList();
            return _mapper.Map<List<RegisterRoomDTO>>(rr);
        }
    }
}
