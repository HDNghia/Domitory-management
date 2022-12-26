using AutoMapper;
using Microsoft.AspNetCore.Routing.Constraints;
using Server.Models;

namespace Server.Helpers
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<CreateManager, Manager>();

            CreateMap<CreateManager, Manager>()
           .ForAllMembers(x => x.Condition(
               (src, dest, prop) =>
               {
                   // ignore both null & empty string properties
                   if (prop == null) return false;
                   if (prop.GetType() == typeof(string) && string.IsNullOrEmpty((string)prop)) return false;

                   // ignore null role
                   //if (x.DestinationMember.Name == "Role" && src.Role == null) return false;

                   return true; 
               }
            ));

            CreateMap<UpdateManager, Manager>().ReverseMap();
            CreateMap<CreateStudent, Student>().ReverseMap();
            CreateMap<UpdateStudent, Student>().ReverseMap();
            CreateMap<CreateRegisterRoom, RegisterRoom>();
            CreateMap<UpdateRegisterRoom, RegisterRoom>();
            CreateMap<CreateElectricWaterLog, ElectricWaterlog>().ReverseMap();
            CreateMap<UpdateElectricWaterLog, ElectricWaterlog>().ReverseMap();
            CreateMap<ElectricWaterLogDTO, ElectricWaterlog>().ReverseMap();
            CreateMap<ElectricWaterLogResponse, ElectricWaterlog>().ReverseMap();
            CreateMap<RoomTypeDTO,RoomType>().ReverseMap();
            CreateMap<RoomDTO, Room>().ReverseMap();
            CreateMap<RegisterRoom, RegisterRoomDTO>()
                .ForMember(des => des.RoomName,
                           act => act.MapFrom(src => src.Room.Name));
                
            CreateMap<Student, StudentDTO>()
            .ForMember(des => des.UniversityName,
                       act => act.MapFrom(src => src.University.Name))
                    
            .ForMember(des => des.RegisterRoomsDTO,
                       act => act.MapFrom(src => src.RegisterRooms));
           
                     
                      
        }

    }
}
