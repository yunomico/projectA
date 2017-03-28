using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.DAL.Interfaces;
using Api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Produces("application/json")]
    [Route("api/Manga")]
    public class MangaController : Controller
    {
        private IRead<Manga> reader;

        public MangaController(IRead<Manga> reader)
        {
            this.reader = reader;
        }

        [HttpGet]
        public IEnumerable<Manga> Get()
        {
            return reader.Read();
        }

        [HttpGet("{id}")]
        public async Task<Manga> Get(string id)
        {
            return await reader.ReadAsync(id);
        }
    }
}