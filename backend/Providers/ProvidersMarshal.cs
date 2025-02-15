namespace backend.Providers
{
    public class ProvidersMarshal
    {
        public static UserProvider UserProvider;

        public static void InitAll()
        {
            UserProvider = new UserProvider();
        }
    }
}
