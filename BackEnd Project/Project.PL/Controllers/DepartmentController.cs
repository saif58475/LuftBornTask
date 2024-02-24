using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project.BL.DepartmentRepository;
using Project.BL.FileUpload;
using Project.BL.Response;
using Project.DAL.Dtos;
using Project.DAL.Models;
using System.Runtime.InteropServices;

namespace Project.PL.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly IDepartmentRepository _departmentRepository;
        private readonly IMapper _mapper;
        private readonly IFURepository _ifurepo;

        public DepartmentController(IDepartmentRepository departmentRepository ,IMapper mapper, IFURepository ifurepo)
        {
            _departmentRepository = departmentRepository;
            _mapper = mapper;
            _ifurepo = ifurepo;
        }
        [HttpPost("Create")]
        public async Task<Response<Department>> Create([FromForm] CreateDepartmemtDto departmentDto)
        {
            var department = _mapper.Map<Department>(departmentDto);
            department.ImagePath = _ifurepo.CreateFileUploader(departmentDto.Image, "Images/Department");
            return await _departmentRepository.Create(department);
        }
        [HttpPost("Update")]
        public async Task<Response<Department>> Update([FromForm] UpdateDepartmentDto updatedepartmentDto)
        {
            Department department = _mapper.Map<Department>(updatedepartmentDto);
            department.ImagePath = this.GetById(updatedepartmentDto.Id).Result.Data.ImagePath;
            if (updatedepartmentDto.Image != null)
             _ifurepo.UpdateFileUploader(updatedepartmentDto.Image, department.ImagePath);

            return await _departmentRepository.Update(department);
        }
        [HttpGet("GetAll")]
        public async Task<Response<List<Department>>> GetAll()
        {
            return await _departmentRepository.GetAll();
        }
        [HttpGet("GetById")]
        public async Task<Response<Department>> GetById(Guid id)
        {
            return await _departmentRepository.GetById(id);
        }
        [HttpDelete("Delete")]
        public async Task<Response<Department>> Delete(Guid id)
        {
            _ifurepo.DeleteFileUploader(this.GetById(id).Result.Data.ImagePath);
            return await _departmentRepository.Delete(id);
        }
    }
}
