using Microsoft.EntityFrameworkCore.Storage;
using Server.Models;

namespace Server.Interface
{
    public interface IRegisterRoom
    {
        public RegisterRoom GetRegisterRoom(int roomId, int studentId);
        public IEnumerable<RegisterRoom> GetAllRegisterRoom();
        public IEnumerable<RegisterRoom> GetRegiterRoomByStudent(int studentId);
        public IEnumerable<RegisterRoom> GetRegisterRoomByRoom(int roomId);
        public void CreateRegisterRoom(CreateRegisterRoom model);
        public void UpdateRegisterRoom(int studentId, int roomId, UpdateRegisterRoom model);
     

    }
}
