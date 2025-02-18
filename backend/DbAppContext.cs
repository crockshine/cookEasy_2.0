using backend.Types;
using Microsoft.EntityFrameworkCore;

namespace backend
{
    public class DbAppContext : DbContext
    {
        public DbSet<User> Users { get; set; } = null!;
        public DbSet<Category> Categories { get; set; } = null!;
        public DbSet<Recipe> Recipes { get; set; } = null!;
        public DbSet<Comment> Comments { get; set; } = null!;
        public DbSet<Ingredient> Ingredients { get; set; } = null!;
        public DbSet<IngredientToRecipe> IngredientToRecipes { get; set; } = null!;
        public DbSet<PhotoToRecipe> PhotoToRecipes { get; set; } = null!;
        public DbSet<Otp> Otps { get; set; } = null!;
        public DbSet<Auth> Auths { get; set; } = null!;

        public static DbAppContext MakeContext() => new DbAppContext();

        public DbAppContext() => Database.EnsureCreated();

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite($"Data Source={Path.Combine(AppContext.BaseDirectory, "cooke2.db")}");
        }

        public object? GetDbSet(Type entityType)
        {
            var method = typeof(DbContext).GetMethod(nameof(Set), Type.EmptyTypes);
            return method?.MakeGenericMethod(entityType).Invoke(this, null);
        }
    }
}
