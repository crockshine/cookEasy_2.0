using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace backend.Types
{
    public class Otp : BaseType
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Column("user_id")]
        public int UserId { get; set; }
        public User User { get; set; }

        [Column("code")]
        [Required]
        public int Code { get; set; }

        [Column("create_date")]
        public DateTime CreateDate { get; set; } = DateTime.UtcNow;

        [Column("expired")]
        public bool Expired { get; set; } = false;
    }
}
