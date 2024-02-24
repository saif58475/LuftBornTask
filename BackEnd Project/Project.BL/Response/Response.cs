using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.BL.Response
{
    public class Response<T> where T : class
    {
        public string Message { get; set; }
        public int StatusCode { get; set; }
        public T Data { get; set; }
        public bool Success { get; set; }
        public Response<T> responce(string message, int statuscode, T data, bool success) 
        {
            return new Response<T> { Message = message, StatusCode = statuscode, Data = data, Success = true};
        }
    }
   
}
