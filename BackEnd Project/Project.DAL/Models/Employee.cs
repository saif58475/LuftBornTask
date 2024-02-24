using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.DAL.Models
{
    public class Employee
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string PhoneNo { get; set; }
        public string? ImagePath { get; set; }
        [Required]
        public Guid DepartmentId { get; set; }
        public virtual Department Department { get; set; }
    }
}
