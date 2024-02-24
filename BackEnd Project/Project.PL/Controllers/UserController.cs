using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project.BL.Repository;
using Project.BL.Response;
using Project.BL.UnitOfWork;
using Project.BL.UserRepository;
using Project.DAL.Dtos;
using Project.DAL.Models;

namespace Project.PL.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public UserController(IUserRepository userRepository, IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }

        [HttpPost("Create")]
        public async Task<Response<User>> Create(CreateUserDto userDto)
        {
            return await _userRepository.Create(_mapper.Map<User>(userDto));
        }
        [HttpPut("Update")]
        public async Task<Response<User>> Update(User user)
        {
            return await _userRepository.Update(user);
        }
        [HttpGet("GetAll")]
        public async Task<Response<List<User>>> GetAll()
        {
            return await _userRepository.GetAll();
        }
        [HttpGet("GetById")]
        public async Task<Response<User>> GetById(Guid id)
        {
            return await _userRepository.GetById(id);
        }
        [HttpDelete("Delete")]
        public async Task<Response<User>> Delete(Guid id)
        {
            return await _userRepository.Delete(id);
        }
        [HttpPost("Login")]
        public async Task<Response<TokenUser>> Login(LoginUser user)
        {
            return await _userRepository.Login(user);
        }
    }
}
