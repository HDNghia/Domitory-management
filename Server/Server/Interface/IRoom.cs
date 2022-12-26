using Server.Models;

namespace Server.Interface
{
    public interface IRoom
    {
        IEnumerable<Room> GetAllRooms();
        IEnumerable<RoomDTO> GetRoomsByBlock(int blockId);
    }
}
