            namespace Server.Models
{
    public class UpdateStudent
    {
         public string LastName { get; set;}
        public string FirstName { get; set;}
        public DateTime BirthDate { get; set;}
        public string Gender { get; set; }
        public string Ethnic { get; set; }
        public string Nationnality { get; set; }
        public string PhoneNumber { get; set; }
        public string HomeAddress { get; set; }
        public string MainAddress { get; set; }
        public string Email { get; set; }
        public byte[] Avartar { get; set; }
        public string IdentifyCardNumber { get; set; }
        public string UniversitysutdentId { get; set; }
        public string Faculty { get; set; }
        public string Major { get; set; }
        public string SchoolYear { get; set; }
        public string RelatedPersonName { get; set; }
        public string RelatedPersonPhoneNumber { get; set; }
        public bool status { get; set; }
        public int UniversityId { get; set; }
    }
}
