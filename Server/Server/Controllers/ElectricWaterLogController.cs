using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Server.Interface;
using Server.Models;

namespace Server.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class ElectricWaterLogController : ControllerBase
    {
        private readonly IElectricWaterLog _electricWaterLog;
        public ElectricWaterLogController(IElectricWaterLog electricWaterLog) {
            _electricWaterLog = electricWaterLog;
        }

        [HttpGet]
        public IActionResult GetElectricWaterLog() {
            var EWL = _electricWaterLog.GetElectricWaterLog();
            return Ok(EWL);
        }
        [HttpGet("{RoomId}")]
        public IActionResult GetElctricWaterLogByRoomId(int RoomId) {
            var EWL = _electricWaterLog.GetElectricWaterLogByRoom(RoomId);
            return Ok(EWL);
        }


        [HttpPost]
        public IActionResult Create(int roomId, CreateElectricWaterLog model) {
            _electricWaterLog.CreateElectricWaterLog(roomId,model);
            return Ok();    
        }

        [HttpPut("{ElectricWaterLogId}")]
        public IActionResult Update(int ElectricWaterLogId,int RoomId, UpdateElectricWaterLog model) {
            _electricWaterLog.UpdateElectricWaterLog(ElectricWaterLogId, RoomId, model);
            return Ok(new { message = "Update success" });

        }
    }
}
