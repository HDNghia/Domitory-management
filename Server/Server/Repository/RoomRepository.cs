using AutoMapper;
using Server.Data;
using Server.Interface;
using Server.Models;

namespace Server.Repository
{
    public class RoomRepository : IRoom
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public RoomRepository(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;

        }
        public IEnumerable<Room> GetAllRooms()
        {
           return _context.Rooms;
        }

        public IEnumerable<RoomDTO> GetRoomsByBlock(int blockId)
        {
            if (_context.Blocks.Find(blockId) == null)
                throw new KeyNotFoundException("Block not exist");
         
               var room =_context.Rooms.Where(r => r.Block.Id == blockId).ToList();

            return _mapper.Map<List<RoomDTO>>(room);
           

            //var roomDto = _mapper.Map<RoomDTO>(room);
            //if(roomDto == null)
            //    throw new KeyNotFoundException("Block not exist");
            //return roomDto;
            

        }
    }
}
