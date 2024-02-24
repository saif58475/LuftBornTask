using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.DAL.Dtos
{
    public class CreateEmployeeDto
    {
        public string Name { get; set; }
        public string PhoneNo { get; set; }
        public IFormFile? Image { get; set; }
        public Guid DepartmentId { get; set; }
    }
    public class UpdateEmployeeDto : CreateEmployeeDto
    {
        public Guid Id { get; set; }
    }
    public class GetEmployeeDto : UpdateEmployeeDto { }
}
