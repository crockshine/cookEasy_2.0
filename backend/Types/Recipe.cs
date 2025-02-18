using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace backend.Types
{
    public class Recipe : BaseType
    {
        [Column("title")]
        [Required]
        public string Title { get; set; }

        [Column("description")]
        public string? Description { get; set; }

        [Column("steps")]
        public string[]? Steps { get; set; }

        [Column("likes")]
        public int Likes { get; set; } = 0;

        [Column("dislikes")]
        public int Dislikes { get; set; } = 0;

        [Column("category_id")]
        public int? CategoryId { get; set; }
        public Category? Category { get; set; }

        [Column("visible")]
        public bool Visible { get; set; } = true;

        [Column("user_id")]
        public int? UserId { get; set; }
        public User? User { get; set; }

        [Column("fat")]
        public int Fat { get; set; } = -1;

        [Column("protein")]
        public int Protein { get; set; } = -1;

        [Column("carb")]
        public int Carb { get; set; } = -1;
    }
}
