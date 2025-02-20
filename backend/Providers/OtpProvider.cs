using backend.Types;

namespace backend.Providers
{
    public class OtpProvider : ProviderBase<Otp>
    {
        public Otp? GetByUser(int userId)
        {
            using (DbAppContext context = DbAppContext.MakeContext())
            {
                return base.GetDbSet(context).Where(item => item.UserId == userId && !item.Expired)
                    .FirstOrDefault();
            }
        }
    }
}
