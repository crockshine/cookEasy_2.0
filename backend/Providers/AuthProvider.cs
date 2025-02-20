using backend.Providers;
using backend.Util;
using Microsoft.EntityFrameworkCore;

namespace backend.Types
{
    public class AuthProvider : ProviderBase<Auth>
    {
        public override Auth Add(Auth item)
        {
            var auth = base.Add(item);
            auth.Token = StringUtil.GenerateRandomString(35);
            return auth;
        }

        public Auth? GetByToken(string token)
        {
            using (DbAppContext context = DbAppContext.MakeContext())
            {
                return base.GetDbSet(context).Where(item => item.Token == token).FirstOrDefault();
            }
        }

        public bool DeleteByToken(string token)
        {
            using (DbAppContext context = DbAppContext.MakeContext())
            {
                var dbSet = base.GetDbSet(context);
                var auth = dbSet.Where(item => item.Token == token).FirstOrDefault();

                if (auth == null)
                {
                    return false;
                }

                dbSet.Remove(auth);
                context.SaveChanges();
                return true;
            }
        }
    }
}
