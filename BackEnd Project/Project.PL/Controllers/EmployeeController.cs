using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project.BL.DepartmentRepository;
using Project.BL.EmployeeRepository;
using Project.BL.FileUpload;
using Project.BL.Response;
using Project.DAL.Dtos;
using Project.DAL.Models;

namespace Project.PL.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeRepository _employeeRepository;
        private readonly IMapper _mapper;
        private readonly IFURepository _ifurepo;
        public EmployeeController(IEmployeeRepository employeeRepository, IMapper mapper, IFURepository ifurepo)
        {
            _employeeRepository = employeeRepository;
            _mapper = mapper;
            _ifurepo = ifurepo;
        }
        [HttpPost("Create")]
        public async Task<Response<Employee>> Create([FromForm] CreateEmployeeDto employeeDto)
        {
            Employee employee = _mapper.Map<Employee>(employeeDto);
            employee.ImagePath = _ifurepo.CreateFileUploader(employeeDto.Image, "Images/Employee");
            return await _employeeRepository.Create(employee);
        }
        [HttpPost("Update")]
        public async Task<Response<Employee>> Update([FromForm] UpdateEmployeeDto updateemployeeDto)
        {
            Employee employee = _mapper.Map<Employee>(updateemployeeDto);
            employee.ImagePath = this.GetById(updateemployeeDto.Id).Result.Data.ImagePath;
            if (updateemployeeDto.Image != null)
                _ifurepo.UpdateFileUploader(updateemployeeDto.Image, employee.ImagePath);

            return await _employeeRepository.Update(employee);
        }
        [HttpGet("GetAll")]
        public async Task<Response<List<Employee>>> GetAll()
        {
            return await _employeeRepository.GetAll();
        }
        [HttpGet("GetById")]
        public async Task<Response<Employee>> GetById(Guid id)
        {
            return await _employeeRepository.GetById(id);
        }
        [HttpDelete("Delete")]
        public async Task<Response<Employee>> Delete(Guid id)
        {
            _ifurepo.DeleteFileUploader(this.GetById(id).Result.Data.ImagePath);
            return await _employeeRepository.Delete(id);
        }
    }
}
