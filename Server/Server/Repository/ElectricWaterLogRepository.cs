using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.Helpers;
using Server.Interface;
using Server.Models;

namespace Server.Repository
{
    public class ElectricWaterLogRepository : IElectricWaterLog
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public ElectricWaterLogRepository(DataContext context, IMapper mapper) {
            _context = context;
            _mapper = mapper;

        }
        public void CreateElectricWaterLog(int roomId, CreateElectricWaterLog model)
        {
            var room = _context.Rooms.Find(roomId);
            if ( room== null) {
                throw new KeyNotFoundException("room not exist");
            }
            var roomDTO = _mapper.Map<RoomDTO>(room);
           
            model.LogDate = DateTime.Today;

     

            if ((model.ElectricNew - model.ElectricOld < 0)
                || (model.WaterNew - model.WaterOld <0 )) {
                throw new AppException("Input water or electric error");
            }

            model.ElectricUse = model.ElectricNew - model.ElectricOld;
            model.WaterUse = model.WaterNew - model.ElectricOld;
            model.ElectricFee = 1200 * model.ElectricUse;
            model.WaterFee = 800 * model.WaterUse;
            model.TotalFee = model.ElectricFee+ model.WaterFee;
            model.FeeStatus = false;
            model.Room = room;
           

            var EWLMap = _mapper.Map<ElectricWaterlog>(model);

            _context.ElectricWaterlogs.Add(EWLMap);
            _context.SaveChanges();


            
        }

        public IEnumerable<ElectricWaterLogResponse> GetElectricWaterLog()
        {
            var EWL = _context.ElectricWaterlogs.Include(e => e.Room).ToList();
            return _mapper.Map<List<ElectricWaterLogResponse>>(EWL);
        }

        public IEnumerable<ElectricWaterlog> GetElectricWaterLogByRoom(int roomId)
        {
            if (_context.Rooms.Find(roomId) == null) {
                throw new KeyNotFoundException("room not exist");
            }

            var ELW = _context.ElectricWaterlogs.Where(e => e.Room.Id == roomId).ToList();

            return ELW;

        }

        public void UpdateElectricWaterLog(int ElectricwaterLogId,int RoomId, UpdateElectricWaterLog model)
        {
            var EWL = _context.ElectricWaterlogs.Find(ElectricwaterLogId);
            if (EWL == null) {
                throw new KeyNotFoundException("Electric water log not exist");
            }

            var room = _context.Rooms.Find(RoomId);
            if (room == null)
            {
                throw new KeyNotFoundException("room not exist");
            }

       

            if ((model.ElectricNew - model.ElectricOld < 0)
                || (model.WaterNew - model.WaterOld < 0))
            {
                throw new AppException("Input water or electric error");
            }

            model.ElectricUse = model.ElectricNew - model.ElectricOld;
            model.WaterUse = model.WaterNew - model.ElectricOld;
            model.ElectricFee = 1200 * model.ElectricUse;
            model.WaterFee = 800 * model.WaterUse;
            model.TotalFee = model.ElectricFee + model.WaterFee;

            model.Room = room;

            _mapper.Map(model, EWL);
            _context.ElectricWaterlogs.Update(EWL);
            _context.SaveChanges();

        }

       
    }
}
