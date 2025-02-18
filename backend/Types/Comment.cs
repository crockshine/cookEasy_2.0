using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace backend.Types
{
    public class Comment : BaseType
    {
        [Column("user_id")]
        public int UserId { get; set; }
        public User User { get; set; }

        [Column("recipe_id")]
        public int RecipeId { get; set; }
        public Recipe Recipe { get; set; }

        [Column("text")]
        public string? Text { get; set; }

        [Column("create_date")]
        public DateTime CreateDate { get; set; } = DateTime.UtcNow;
    }
}
