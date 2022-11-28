using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Server.Interface;
using Server.Models;

namespace Server.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class AccountController: ControllerBase
    {
        private IAccountService _accountService;

        public AccountController(IAccountService userService)
        {
            _accountService = userService;
        }

        [AllowAnonymous]
        [HttpPost("[action]")]
        public IActionResult Authenticate(AuthenticateRequest model)
        {
            var response = _accountService.Authenticate(model);
            return Ok(response);
        }


        [Authorize(Roles = "Admin")]
        [HttpGet]
        public IActionResult GetAll()
        {
            var users = _accountService.GetAll();
            return Ok(users);
        }

        [HttpGet("{id:int}")]
        public IActionResult GetById(int id)
        {
            // only admins can access other user records
            var currentUser = (Account)HttpContext.Items["Account"];
            if (id != currentUser.Id && currentUser.Role != Role.Admin)
                return Unauthorized(new { message = "Unauthorized" });

            var user = _accountService.GetById(id);
            return Ok(user);
        }
    }
}
