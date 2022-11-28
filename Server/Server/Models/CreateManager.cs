using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
    public class CreateManager
    {
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
       
        public bool? Status { get; set; }
     
        public virtual Account? Acount { get; set; }


    }
}
