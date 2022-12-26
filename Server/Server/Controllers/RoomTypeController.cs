using Microsoft.AspNetCore.Mvc;
using Server.Interface;
using Server.Models;

namespace Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RoomTypeController : ControllerBase {

        private readonly IRoomTypes _roomType;

        public RoomTypeController(IRoomTypes roomTypes)
        {
            _roomType = roomTypes;
        }

        [HttpGet("{roomId}")]
        public IActionResult GetRoomTypeByRoomId(int roomId) {
            var roomType = _roomType.GetRoomType(roomId);
            return Ok(roomType);
        }
        [HttpGet()]
        public IActionResult GetAllRoomType() {
            var roomtype = _roomType.GetAllRoomTypes();
            return Ok(roomtype);
        }
        [HttpPut("{id}")]
        public IActionResult UpdateRoomType(int id, RoomTypeDTO roomType) {
            _roomType.UpdateRoomType(id, roomType);
            return Ok();
        }
    }
}
