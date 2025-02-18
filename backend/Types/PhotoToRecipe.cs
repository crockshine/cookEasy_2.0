using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace backend.Types
{
    public class PhotoToRecipe : BaseType
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Column("photo")]
        [Required]
        public string Photo { get; set; }

        [Column("recipe_id")]
        public int RecipeId { get; set; }
        public Recipe Recipe { get; set; }
    }
}
