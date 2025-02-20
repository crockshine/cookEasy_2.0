using backend.Types;
using System;

namespace backend.Providers
{
    public class OtpProvider : ProviderBase<Otp>
    {
        public override Otp Add(Otp item)
        {
            // Сначала надо дезактивировать все отп с данным пользователем (если вдруг есть)
            // Так называемая зашита от далбоеба
            using (DbAppContext context = DbAppContext.MakeContext())
            {
                var otps = base.GetDbSet(context).Where(item => item.UserId == item.UserId).ToList();
                otps.ForEach(item => item.Expired = true);
                context.SaveChanges();
            }
            
            return base.Add(item);
        }

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
