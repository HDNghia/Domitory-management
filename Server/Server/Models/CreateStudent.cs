using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Server.Models
{
    public class CreateStudent
    {
        [Required]
        public string LastName { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public DateTime BirthDate { get; set; }
        [Required]
        public string Gender { get; set; }
        [Required]
        public string Ethnic { get; set; }
        [Required]
        public string Nationnality { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
        [Required]
        public string HomeAddress { get; set; }
        [Required]
        public string MainAddress { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public byte[]? Avartar { get; set; }
        [Required]
        public string IdentifyCardNumber { get; set; }
        [Required]
        public string UniversitysutdentId { get; set; }
        [Required]
        public string Faculty { get; set; }
        [Required]
        public string Major { get; set; }
        [Required]
        public string SchoolYear { get; set; }
        //public string InDate { get; set; }
        //public string Outdate { get; set; }
        public string RelatedPersonName { get; set; }
        [Required]
        public string RelatedPersonPhoneNumber { get; set; }

        [JsonIgnore]
        public bool? status { get; set; }

        [JsonIgnore]
        public Account? account { get; set; }

        public int UniversityId { get; set; }
        [JsonIgnore]
        public University ?University { get; set; }
    }
}
