using Grpc.Core;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking.Internal;
using Microsoft.EntityFrameworkCore.Query.Internal;
using Project.BL.Response;
using Project.DAL.AppDBContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.BL.Repository
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        private readonly ApplicationDBContext _context;
        Response<T> _response = new Response<T>();
        public GenericRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        #region Generic CRUD 
        public async Task<Response<T>> Create(T entity)
        {
            try
            {
                await _context.Set<T>().AddAsync(entity);
                _context.SaveChanges();
                return _response.responce("Success", 200, entity, true);
            }
            catch (Exception ex)
            {
                return _response.responce(ex.Message, 400, null, false);
            }
        }

        public async Task<Response<T>> Delete(Guid id)
        {
            try
            {
                _context.Set<T>().Remove(await _context.Set<T>().FindAsync(id));
                _context.SaveChanges();
                return _response.responce("Success", 200, null, true);
            }
            catch (Exception ex)
            {
                return _response.responce(ex.Message, 400, null, false);
            }
        }

        public async Task<Response<List<T>>> GetAll()
        {
            Response<List<T>> response = new Response<List<T>>();
            try
            {
                return new Response<List<T>> { Message = "Success", StatusCode = 200, Data = await _context.Set<T>().ToListAsync(), Success = true };
            }
            catch (Exception ex)
            {
                return new Response<List<T>> { Message = ex.Message, StatusCode = 400, Data = null, Success = false };
            }
        }

        public async Task<Response<T>> GetById(Guid id)
        {
            try
            {
                return _response.responce("Success", 200, await _context.Set<T>().FindAsync(id), true);
            }
            catch (Exception ex)
            {
                return _response.responce(ex.Message, 400, null, false);
            }
        }

        public async Task<Response<T>> Update(T entity)
        {
            try
            {
                _context.Set<T>().Update(entity);
                await _context.SaveChangesAsync();
                return _response.responce("Success", 200, entity, true);
            }
            catch (Exception ex)
            {

                return _response.responce(ex.Message, 400, null, false);
            }
        }
        #endregion


    }
}
