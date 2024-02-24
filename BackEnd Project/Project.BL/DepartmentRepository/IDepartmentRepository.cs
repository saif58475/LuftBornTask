using Project.BL.Repository;
using Project.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.BL.DepartmentRepository
{
    public interface IDepartmentRepository : IGenericRepository<Department>
    {
    }
}
