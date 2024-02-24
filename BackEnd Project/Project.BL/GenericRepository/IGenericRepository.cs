using Project.BL.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.BL.Repository
{
    public interface IGenericRepository<T> where T : class
    {
        Task<Response<List<T>>> GetAll();
        Task<Response<T>> GetById(Guid id);
        Task<Response<T>> Create(T entity);
        Task<Response<T>> Update(T entity);
        Task<Response<T>> Delete(Guid id);
    }
}
