using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(IETestApplication.Startup))]
namespace IETestApplication
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
