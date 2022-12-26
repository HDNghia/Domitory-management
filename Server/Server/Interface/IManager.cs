using Server.Models;

namespace Server.Interface
{
    public interface IManager
    {
        IEnumerable<Manager> GetAllManager();
        Manager GetManagerById(int id );
        Manager GetManagerByAccount(int id);
        IEnumerable<Manager> GetManagerByIdBock(int id);
        void CreateManager(CreateManager model);
        void UpdateManager(int id,UpdateManager model);
        
    }
}
