using AutoMapper;
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
        }

    }
}
