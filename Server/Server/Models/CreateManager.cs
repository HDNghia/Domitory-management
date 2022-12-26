using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Server.Models
{
    public class CreateManager
    {
        [JsonIgnore]
        public int? Id { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string  FirstName { get; set; }
        [Required]
        public DateTime DateOfBirth { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string IdentiFyCardNumber { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public bool Gender { get; set; }
        [Required]
        public int IdCard { get; set; }

        [JsonIgnore]
        public bool? Status { get; set; }

        [JsonIgnore]
     
        public virtual Account? Acount { get; set; }


    }
}
