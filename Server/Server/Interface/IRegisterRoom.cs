using Microsoft.EntityFrameworkCore.Storage;
using Server.Models;

namespace Server.Interface
{
    public interface IRegisterRoom
    {
        public RegisterRoom GetRegisterRoom(int Id);
        public IEnumerable<RegisterRoomDTO> GetAllRegisterRoom();
        public IEnumerable<RegisterRoom> GetRegiterRoomByStudent(int studentId);
        public IEnumerable<RegisterRoom> GetRegisterRoomByRoom(int roomId);
        public IEnumerable<RegisterRoomDTO> GetRegisterRoomByRoomIdStudentId(int RoomId, int StudentId);
        public void CreateRegisterRoom(CreateRegisterRoom model);
        public void UpdateRegisterRoom(int Id, UpdateRegisterRoom model);
     

    }
}
