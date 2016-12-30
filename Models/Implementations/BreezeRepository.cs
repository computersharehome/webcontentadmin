using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Breeze.WebApi;
using Newtonsoft.Json.Linq;
using MvcApplication1.Models.DbContext;
using MvcApplication1.Models.Contracts;

namespace MvcApplication1.Models.Implementations
{
    public class BreezeRepository : IBreezeRepository
    {
        readonly EFContextProvider<eIndicatorEntities> _contextProvider =
            new EFContextProvider<eIndicatorEntities>();

        public string Metadata()
        {
            return _contextProvider.Metadata();
        }

        public SaveResult SaveChanges(JObject saveBundle)
        {
            return _contextProvider.SaveChanges(saveBundle);
        }

        public IQueryable<CompanyConfig> CompanyConfigs
        {
            get { return _contextProvider.Context.CompanyConfigs; }
        }

        public IQueryable<Participant> Participants
        {
            get { return _contextProvider.Context.Participants; }
        }
    }
}