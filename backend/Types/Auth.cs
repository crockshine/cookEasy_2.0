using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace backend.Types
{
    public class Auth : BaseType
    {
        [Column("user_id")]
        public int UserId { get; set; }
        public User User { get; set; }

        [Column("token")]
        public string Token { get; set; }
    }
}
