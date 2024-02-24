using AutoMapper;
using Project.DAL.Dtos;
using Project.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.DAL.AutoMapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<User, CreateUserDto>().ReverseMap();
            CreateMap<Department, CreateDepartmemtDto>().ReverseMap();
            CreateMap<Department, UpdateDepartmentDto>()
                .ForMember(dt =>
                    dt.Id,
                    opt => opt.MapFrom(src => src.Id))
                .ForMember(dt =>
                   dt.Name,
                   opt => opt.MapFrom(src => src.Name))
                .ForMember(dt =>
                   dt.Code,
                   opt => opt.MapFrom(src => src.Code)).ReverseMap();

            CreateMap<Employee, CreateEmployeeDto>().ReverseMap();
            CreateMap<Employee, UpdateEmployeeDto>().ReverseMap();
        }
    }
}
