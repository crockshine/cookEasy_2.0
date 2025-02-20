using backend.Service;
using backend.Types;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        // Register:
        [HttpPost("reg")]
        public ActionResult Register([FromBody] RegisterDto data)
        {
            try
            {
                AuthService.Register(data);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // Auth:
        [HttpPost("{email}")]
        public ActionResult Auth(string email)
        {
            try
            {
                AuthService.Auth(email);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{token}")]
        public ActionResult Logout(string token)
        {
            try
            {
                var result = AuthService.Logout(token);
                return result ? Ok() : NotFound($"Сессия с токеном {token} не найдена.");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // Verify OTP:
        [HttpPost("verify")]
        public ActionResult<Auth> VerifyOtp([FromBody] VerifyOtpDto data)
        {
            try
            {
                var result = AuthService.VerifyOtp(data);
                return result != null ? Ok(result) : NotFound("Ошибка подтверждения OTP кода.");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{token}")]
        public ActionResult<User> FetchUser(string token)
        {
            try
            {
                var result = AuthService.FetchUser(token);
                return result != null ? Ok(result) : NotFound($"Пользователь с сессией {token} не найден.");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }

    public class RegisterDto
    {
        public string Name { get; set; }

        public string Email { get; set; }
    }

    public class VerifyOtpDto
    {
        public string Email { get; set; }

        public string Otp { get; set; }
    }
}
