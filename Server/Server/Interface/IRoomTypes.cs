using Server.Models;

namespace Server.Interface
{
    public interface IRoomTypes
    {
        public RoomType GetRoomType(int roomId);
        public IEnumerable<RoomTypeDTO> GetAllRoomTypes();
        public void UpdateRoomType(int roomTypeId, RoomTypeDTO model);
        
    }
}
