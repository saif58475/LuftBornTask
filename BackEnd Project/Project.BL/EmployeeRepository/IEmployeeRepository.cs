using Project.BL.Repository;
using Project.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.BL.EmployeeRepository
{
    public interface IEmployeeRepository : IGenericRepository<Employee>
    {
    }
}
