using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Breeze.WebApi;
using Newtonsoft.Json.Linq;
using MvcApplication1.Models.DbContext;

namespace MvcApplication1.Models.Contracts
{
    public interface IBreezeRepository
    {
        string Metadata();
        SaveResult SaveChanges(JObject saveBundle);
        IQueryable<CompanyConfig> CompanyConfigs { get; }
        IQueryable<Participant> Participants { get; }
    }
}
