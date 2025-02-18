using backend.Types;

namespace backend.Providers
{
    public class ProvidersMarshal
    {
        public static UserProvider UserProvider;
        public static AuthProvider AuthProvider;
        public static CategoryProvider CategoryProvider;
        public static CommentProvider CommentProvider;
        public static IngredientProvider IngredientProvider;
        public static IngredientToRecipeProvider IngredientToRecipeProvider;
        public static OtpProvider OtpProvider;
        public static PhotoToRecipeProvider PhotoToRecipeProvider;
        public static RecipeProvider RecipeProvider;

        public static void InitAll()
        {
            UserProvider = new UserProvider();
            AuthProvider = new AuthProvider();
            CategoryProvider = new CategoryProvider();
            CommentProvider = new CommentProvider();
            IngredientProvider = new IngredientProvider();
            IngredientToRecipeProvider = new IngredientToRecipeProvider();
            OtpProvider = new OtpProvider();
            PhotoToRecipeProvider = new PhotoToRecipeProvider();
            RecipeProvider = new RecipeProvider();
        }
    }
}
