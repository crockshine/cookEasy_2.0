using backend.Types;

namespace backend.Providers
{
    public class UserProvider : ProviderBase<User>
    {
        public User? GetByEmail(string email)
        {
            using (DbAppContext context = DbAppContext.MakeContext()) 
            { 
                return base.GetDbSet(context).Where(user => user.Email == email)
                    .FirstOrDefault();
            }
        }

        public bool ContainsByEmail(string email)
        {
            return GetByEmail(email) != null;
        }
    }
}
