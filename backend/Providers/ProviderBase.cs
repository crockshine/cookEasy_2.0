using backend.Types;
using Microsoft.EntityFrameworkCore;

namespace backend.Providers
{
    public class ProviderBase<MType> where MType : BaseType
    {
        private Random random = new Random();

        protected DbSet<MType> GetDbSet(DbAppContext context)
        {
            return context.GetDbSet(typeof(MType)) as DbSet<MType> ?? throw new InvalidOperationException("DbSet not found.");
        }

        public virtual IEnumerable<MType> ListAll()
        {
            using (DbAppContext context = DbAppContext.MakeContext())
            {
                return GetDbSet(context).ToList();
            }
        }

        public virtual MType? Get(int id)
        {
            using (DbAppContext context = DbAppContext.MakeContext())
            {
                return GetDbSet(context).Find(id);
            }
        }

        public virtual MType Add(MType item)
        {
            using (DbAppContext context = DbAppContext.MakeContext())
            {
                item.Id = random.Next();
                GetDbSet(context).Add(item);
                context.SaveChanges();
                return item;
            }
        }

        public virtual void Delete(int id)
        {
            using (DbAppContext context = DbAppContext.MakeContext())
            {
                var dbSet = GetDbSet(context);
                var entity = dbSet.Find(id);

                if (entity != null)
                {
                    dbSet.Remove(entity);
                    context.SaveChanges();
                }
            }
        }

        public virtual MType Update(MType item)
        {
            using (DbAppContext context = DbAppContext.MakeContext())
            {
                var dbSet = GetDbSet(context);
                dbSet.Update(item);
                context.SaveChanges();
                return item;
            }
        }
    }
}
