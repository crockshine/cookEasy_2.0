﻿using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace backend.Types
{
    public class IngredientToRecipe : BaseType
    {
        [Column("ingredient_id")]
        public int IngredientId { get; set; }
        public Ingredient Ingredient { get; set; }

        [Column("recipe_id")]
        public int RecipeId { get; set; }
        public Recipe Recipe { get; set; }
    }
}
