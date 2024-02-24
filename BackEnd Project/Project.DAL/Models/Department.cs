using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.DAL.Models
{
    public class Department
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public int Code { get; set; }
        public string? ImagePath{ get; set; }
        public virtual ICollection<Employee> Employees { get; set; }
    }
}
