using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Api.Models;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Api.DAL
{
    public class DataAccess
    {
        private readonly IMongoClient client;
        private readonly IMongoDatabase database;

        public DataAccess()
        {
            client = new MongoClient("mongodb://localhost:27017/");
            database = client.GetDatabase("MangaReaderDB");
        }

        public IEnumerable<Manga> GetManga()
        {
            return database.GetCollection<Manga>("Manga").Find(x => x != null).ToList();
        }
    }
}