using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.BL.FileUpload
{
    public interface IFURepository 
    {
         string CreateFileUploader(IFormFile img, string path);
         void UpdateFileUploader(IFormFile img, string path);
         void DeleteFileUploader(string imagePath);
    }
}
