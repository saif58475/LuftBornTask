using Project.BL.Repository;
using Project.BL.UserRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.BL.UnitOfWork
{
    public interface IUnitOfWork : IDisposable
    {
        void Commit();
        void Rollback();
        IGenericRepository<T> GetRepository<T>() where T : class;
    }
}
