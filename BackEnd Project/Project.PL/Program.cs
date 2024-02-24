using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Project.BL.DepartmentRepository;
using Project.BL.EmployeeRepository;
using Project.BL.FileUpload;
using Project.BL.Repository;
using Project.BL.UnitOfWork;
using Project.BL.UserRepository;
using Project.DAL.AppDBContext;
using Project.DAL.AutoMapper;
using Project.DAL.Models;
using System.Text;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore.Infrastructure;
using System.Runtime.Intrinsics.Arm;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
// this is connectionstring to the database
builder.Services.AddDbContext<ApplicationDBContext>(options => options.UseSqlServer(
    builder.Configuration.GetConnectionString("DefaultConnection")
    ));

// Create a scope to resolve dependencies
using var scope = builder.Services.BuildServiceProvider().CreateScope();

// Get the instance of your DbContext
var AppdbContext = scope.ServiceProvider.GetRequiredService<ApplicationDBContext>();
   // Apply pending migrations
   AppdbContext.Database.EnsureCreated();
SeedDatabaseAsync(AppdbContext).GetAwaiter().GetResult();

// this adds the configuration of the Authentication to the project 
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).
    AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidAudience = builder.Configuration["Jwt:Issuer"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
        };
    });
// This will make swagger works only when recieving the tokens 
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "LuftBorn BackEnd Project", Version = "v1" });
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Description = "Jwt Authorization",
    });
    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
        {
            Reference = new OpenApiReference
            {
                Type = ReferenceType.SecurityScheme,
                Id = "Bearer"
            }
        },
            new string[] {}
        }
    });
});
//This that allows the CROS Origins 
builder.Services.AddCors(options =>
{
    options.AddPolicy("Open Server", builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
});
//Injecting the automapper in the pipeline
builder.Services.AddAutoMapper(typeof(MappingProfile));
//Adding the unit of work to the DI Container
builder.Services.AddScoped<IUserRepository, UserrRepository>();
builder.Services.AddScoped<IDepartmentRepository, DepartmentRepository>();
builder.Services.AddScoped<IEmployeeRepository, EmployeeRepository>();
builder.Services.AddScoped<IFURepository, FURepository>();
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();
app.UseCors("Open Server");
app.MapControllers();

app.Run();



async Task SeedDatabaseAsync(ApplicationDBContext dbContext)
{
    User DefaultUser = new User
    {
       FirstName = "admin",
       LastName = "admin",
       Email = "admin@gmail.com",
       Password = "abc@123"
    };
    List<Department> departments = new List<Department>() 
        {
         new Department  {
             Name = "Hr Deparmtent",
             Code = 001
        },
         new Department
         {
             Name = "SoftWare Department",
             Code = 002
         }
        };

    #region Seed the data 
    var userExists = await dbContext.Users.AnyAsync(c => c.Email == "admin@gmail.com");
    if (!userExists)
    {
        dbContext.Users.Add(DefaultUser);
       await dbContext.SaveChangesAsync();
        foreach (Department dep in departments)
        {
            dbContext.Departments.Add(dep);
            await dbContext.SaveChangesAsync();
        }
    }
    #endregion
    }