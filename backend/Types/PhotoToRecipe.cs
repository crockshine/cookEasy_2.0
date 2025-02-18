using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace backend.Types
{
    public class PhotoToRecipe : BaseType
    {
        [Column("photo")]
        [Required]
        public string Photo { get; set; }

        [Column("recipe_id")]
        public int RecipeId { get; set; }
        public Recipe Recipe { get; set; }
    }
}
