using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.BL.FileUpload
{
    public class FURepository : IFURepository
    {
        public string CreateFileUploader(IFormFile img, string path)
        {
            FileInfo imgFileInfo = new FileInfo(img.FileName);
            string imgpath = Guid.NewGuid().ToString() + imgFileInfo.Extension;
            string pathofimg = Path.Combine(path, imgpath);
            using (Stream stream = new FileStream(pathofimg, FileMode.Create))
            {
                img.CopyTo(stream);
            };
            return pathofimg;
        }
        public void UpdateFileUploader(IFormFile img, string path)
        {
            using (Stream stream = new FileStream(path, FileMode.Create))
            {
                img.CopyTo(stream);
            };
        }
        public void DeleteFileUploader(string imagePath)
        {
            if (File.Exists(imagePath))
            {
                File.Delete(imagePath);
                // Image file successfully deleted
            }
        }
    }
}
