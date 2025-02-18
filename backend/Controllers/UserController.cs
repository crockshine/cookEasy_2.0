using backend.Providers;
using backend.Types;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        // GET: api/<UserController>
        [HttpGet]
        public ActionResult<IEnumerable<User>> Get()
        {
            try
            {
                var data = ProvidersMarshal.UserProvider.ListAll();
                return data != null ? Ok(data) : NotFound($"Данные не найдены.");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public ActionResult<User> Get(int id)
        {
            try
            {
                var data = ProvidersMarshal.UserProvider.Get(id);
                return data != null ? Ok(data) : NotFound($"Данные не найдены.");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // POST api/<UserController>
        [HttpPost]
        public ActionResult<User> Post([FromBody] User value)
        {
            try
            {
                var data = ProvidersMarshal.UserProvider.Add(value);
                return data != null ? Ok(data) : NotFound($"Данные не найдены.");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                ProvidersMarshal.UserProvider.Delete(id);
                return Ok($"{id} упешно удален.");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
