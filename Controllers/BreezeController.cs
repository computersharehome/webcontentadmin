using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Breeze.WebApi;
using Newtonsoft.Json.Linq;
using MvcApplication1.Models.DbContext;
using MvcApplication1.Models.Contracts;
using MvcApplication1.Models.Implementations;

namespace MvcApplication1.Controllers
{
    [BreezeController]
    public class BreezeController : ApiController
    {
        readonly IBreezeRepository repository;

        public BreezeController()
        {
            repository  = new BreezeRepository();
        }

        [HttpGet]
        public string Metadata()
        {
            return repository.Metadata();
        }

        [HttpPost]
        public SaveResult SaveChanges(JObject saveBundle)
        {
            return repository.SaveChanges(saveBundle);
        }

        public IQueryable<CompanyConfig> GetCompanyConfigs()
        {
            return repository.CompanyConfigs;
        }

        public IQueryable<Participant> GetParticipants()
        {
            return repository.Participants;
        }

        [HttpGet]
        public string Menu()
        {
            return "[{\"id\": \"#/Home/\", \"text\": \"Home\", \"parentid\": \"-1\", \"subMenuWidth\": \"250px\" }, {\"id\": \"#/Portfolio/\", \"text\": \"Portfolio\", \"parentid\": \"-1\", \"subMenuWidth\": \"250px\" }, {\"id\": \"#/Settings/\", \"text\": \"Settings\", \"parentid\": \"-1\", \"subMenuWidth\": \"250px\" }]";
        }
    }
}
