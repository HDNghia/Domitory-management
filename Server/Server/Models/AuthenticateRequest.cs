using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
    public class AuthenticateRequest
    {
        [Required]
        public string UserName { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
