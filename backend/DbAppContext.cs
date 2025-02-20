using backend.Types;
using Microsoft.EntityFrameworkCore;

namespace backend
{
    public class DbAppContext : DbContext
    {
        public DbSet<User> User { get; set; } = null!;
        public DbSet<Category> Category { get; set; } = null!;
        public DbSet<Recipe> Recipe { get; set; } = null!;
        public DbSet<Comment> Comment { get; set; } = null!;
        public DbSet<Ingredient> Ingredient { get; set; } = null!;
        public DbSet<IngredientToRecipe> IngredientToRecipe { get; set; } = null!;
        public DbSet<PhotoToRecipe> PhotoToRecipe { get; set; } = null!;
        public DbSet<Otp> Otp { get; set; } = null!;
        public DbSet<Auth> Auth { get; set; } = null!;

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
