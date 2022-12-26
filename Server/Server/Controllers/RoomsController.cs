using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Server.Interface;

namespace Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RoomsController: ControllerBase
    {
        private readonly IRoom _room;
        private readonly IMapper _mapper;
        public RoomsController(IRoom room, IMapper mapper)
        {
            _room = room;
            _mapper = mapper;
        }


        [HttpGet]
        public IActionResult GetRoom() {
             var room = _room.GetAllRooms();
            return Ok(room);

        }
        [HttpGet("{blockId}/Block") ]
        public IActionResult GetRoomByBlock(int blockId)
        {
            var room = _room.GetRoomsByBlock(blockId);
            return Ok(room);

        }
    }
}
