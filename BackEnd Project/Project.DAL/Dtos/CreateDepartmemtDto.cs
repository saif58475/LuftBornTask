using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.DAL.Dtos
{
    public class CreateDepartmemtDto
    {
        public string Name { get; set; }
        public int Code { get; set; }
        public IFormFile? Image { get; set; }
    }
    public class UpdateDepartmentDto : CreateDepartmemtDto
    {
        public Guid Id { get; set; }
    }
    public class GetDepartmentDto : UpdateDepartmentDto { }
}
