using AutoMapper;
using Project.BL.FileUpload;
using Project.BL.Repository;
using Project.BL.Response;
using Project.BL.UnitOfWork;
using Project.DAL.AppDBContext;
using Project.DAL.Dtos;
using Project.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.BL.DepartmentRepository
{
    public class DepartmentRepository : IDepartmentRepository
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly ApplicationDBContext _dbContext;
        private readonly IGenericRepository<Department> _DepartmentRepository;
        public DepartmentRepository(IUnitOfWork unitOfWork, ApplicationDBContext dbContext)
        {
            _unitOfWork = unitOfWork;
            _dbContext = dbContext;
            _DepartmentRepository = _unitOfWork.GetRepository<Department>();
        }

        #region Department Implementation
        public async Task<Response<Department>> Create(Department entity)
        {
            return await _DepartmentRepository.Create(entity);
        }

        public async Task<Response<Department>> Delete(Guid id)
        {
            return await _DepartmentRepository.Delete(id);
        }

        public async Task<Response<List<Department>>> GetAll()
        {
            return await _DepartmentRepository.GetAll();
        }

        public async Task<Response<Department>> GetById(Guid id)
        {
            return await _DepartmentRepository.GetById(id);
        }

        public async Task<Response<Department>> Update(Department entity)
        {
            _dbContext.ChangeTracker.Clear();
            return await _DepartmentRepository.Update(entity);
        }
        #endregion
    }
}
