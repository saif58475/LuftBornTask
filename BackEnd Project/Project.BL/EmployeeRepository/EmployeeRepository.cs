using Project.BL.Repository;
using Project.BL.Response;
using Project.BL.UnitOfWork;
using Project.DAL.AppDBContext;
using Project.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.BL.EmployeeRepository
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly ApplicationDBContext _dbContext;
        private readonly IGenericRepository<Employee> _EmployeeRepository;
        public EmployeeRepository(IUnitOfWork unitOfWork, ApplicationDBContext dbContext)
        {
            _unitOfWork = unitOfWork;
            _dbContext = dbContext;
            _EmployeeRepository = _unitOfWork.GetRepository<Employee>();
        }

        #region Employee Implementation 
        public async Task<Response<Employee>> Create(Employee entity)
        {
            return await _EmployeeRepository.Create(entity);
        }

        public async Task<Response<Employee>> Delete(Guid id)
        {
            return await _EmployeeRepository.Delete(id);
        }

        public async Task<Response<List<Employee>>> GetAll()
        {
            return await _EmployeeRepository.GetAll();
        }

        public async Task<Response<Employee>> GetById(Guid id)
        {
            return await _EmployeeRepository.GetById(id);
        }

        public async Task<Response<Employee>> Update(Employee entity)
        {
            _dbContext.ChangeTracker.Clear();
            return await _EmployeeRepository.Update(entity);
        }
        #endregion
    }
}
