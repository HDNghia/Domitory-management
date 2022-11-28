using Microsoft.EntityFrameworkCore;
using Server;
using Server.Authoriatzion;
using Server.Data;
using Server.Helpers;
using Server.Interface;
using Server.Repository;
using System.Text.Json.Serialization;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddTransient<Seed>();
builder.Services.AddCors();

builder.Services.AddDbContext<DataContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));

});


builder.Services.AddControllers().AddJsonOptions(x =>
{
    // serialize enums as strings in api responses (e.g. Role)
    x.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
    // ignore omitted parameters on models to enable optional params (e.g. User update)
    x.JsonSerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;
});
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
// configure strongly typed settings object
builder.Services.Configure<AppSettings>(builder.Configuration.GetSection("AppSettings"));
// configure DI for application services

builder.Services.AddScoped<IJwtUtils, JwtUtils>();
builder.Services.AddScoped<IAccountService, AccountRepository>();
builder.Services.AddScoped<IManager, ManagerRepository>();
builder.Services.AddScoped<IStudent, StudentRepository>();
builder.Services.AddScoped<IRegisterRoom, RegisterRoomRepository>();

var app = builder.Build();
if (args.Length == 1 && args[0].ToLower() == "seeddata")
    SeedData(app);

void SeedData(IHost app)
{
    var scopedFactory = app.Services.GetService<IServiceScopeFactory>();

    using (var scope = scopedFactory.CreateScope())
    {
        var service = scope.ServiceProvider.GetService<Seed>();
        service.SeedDataContext();
    }
}
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();

}
// global error handler
app.UseMiddleware<ErrorHandlerMiddleware>();
app.UseCors(x => x
        .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader());
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
