using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Server.Interface;
using Server.Models;
using Server.Repository;

namespace Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RegisterRoomController : ControllerBase
    {
        private readonly IRegisterRoom _registerRoom;

        public RegisterRoomController(IRegisterRoom registerRoom)
        {
            _registerRoom = registerRoom;

        }
        [HttpGet]
        public IActionResult GetAllRegisterRoom() {
            var registerRoom = _registerRoom.GetAllRegisterRoom();
            return Ok(registerRoom);
        }
        [HttpGet("{roomId}/{studentId}")]
        public IActionResult GetRegisterRoom(int roomId, int studentId) {
            var registerRoom=_registerRoom.GetRegisterRoomByRoomIdStudentId(roomId, studentId);
            return Ok(registerRoom);
        }
        [HttpGet("{roomId}/room")]
        public IActionResult GetRegisterRoomByRoomId(int roomId) { 
            var registerRoom = _registerRoom.GetRegisterRoomByRoom(roomId);
            return Ok(registerRoom);
        }
        [HttpGet("{studentId}/student")]
        public IActionResult GetRegisterRoomByStudentId(int studentId)
        {
            var registerRoom = _registerRoom.GetRegiterRoomByStudent(studentId);
            return Ok(registerRoom);
        }
        [HttpPost]
        public IActionResult CreateRegisterRoom(CreateRegisterRoom model) {
            _registerRoom.CreateRegisterRoom(model);
            return Ok(new { message = "Register Room Success"});
        }
        [HttpPut("{registerRoomId}")]
        public IActionResult UpdateRegisterRoom(int registerRoomId, UpdateRegisterRoom model) {
            _registerRoom.UpdateRegisterRoom(registerRoomId, model);
            return Ok(new { message = "Update success"});
        } 

    }
}
