using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Threading.Tasks;
using Api.Configuration;
using Api.DAL.Interfaces;
using Api.Utilities.Schema;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDbConfiguration = Api.Configuration.Databases.MongoDb;

namespace Api.DAL.MongoDb
{
    public class MongoDbReader<TEntity> : IRead<TEntity>
    {
        private readonly IMongoClient client;
        private readonly IMongoDatabase database;
        private readonly IMongoCollection<TEntity> collection;

        public MongoDbReader()
        {
            var configurations = ConfigurationManager.GetInstance()
                                                     .Configuration
                                                     .AsEnumerable();

            string host = configurations.FirstOrDefault(x => x.Key == "Databases:MongoDB:Host").Value;
            string username = configurations.FirstOrDefault(x => x.Key == "Databases:MongoDB:Username").Value;
            string password = configurations.FirstOrDefault(x => x.Key == "Databases:MongoDB:Password").Value;
            string port = configurations.FirstOrDefault(x => x.Key == "Databases:MongoDB:Port").Value;
            
            client = new MongoClient($"mongodb://{username}:{password}@{host}:{port}/");

            database = client.GetDatabase(ConnectionManager.MongoDbDefaultDatabase);

            string collectionName = typeof(TEntity).GetTypeInfo()
                                                   .GetCustomAttribute<CollectionAttribute>()
                                                   ?.Name ?? typeof(TEntity).Name + "s";

            collection = database.GetCollection<TEntity>(collectionName);
        }

        public TEntity Read(object id)
        {
            return collection.Find(new BsonDocument
            {
                {
                    "_id", new ObjectId(id.ToString())
                }
            }).FirstOrDefault();
        }

        public object Read(object id, Expression<Func<TEntity, object>> selector)
        {
            throw new NotImplementedException();
        }

        public TEntity Read(object id, Expression<Func<TEntity, TEntity>> selector)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<TEntity> Read()
        {
            return collection.Find(new BsonDocument()).ToList();
        }

        public IEnumerable<TEntity> Read(int skipe, int take)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<TEntity> Read(Expression<Func<TEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<object> Read(Expression<Func<TEntity, bool>> predicate, Expression<Func<TEntity, object>> selector)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<TEntity> Read(Expression<Func<TEntity, bool>> predicate, Expression<Func<TEntity, TEntity>> selector)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<TEntity> Read(int skip, int take, Expression<Func<TEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<object> Read(int skip, int take, Expression<Func<TEntity, bool>> predicate, Expression<Func<TEntity, object>> selector)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<TEntity> Read(int skip, int take, Expression<Func<TEntity, bool>> predicate, Expression<Func<TEntity, TEntity>> selector)
        {
            throw new NotImplementedException();
        }

        public Task<TEntity> ReadAsync(object id)
        {
            return collection.Find(new BsonDocument
            {
                {
                    "_id", new ObjectId(id.ToString())
                }
            }).FirstOrDefaultAsync();
        }

        public Task<object> ReadAsync(object id, Expression<Func<TEntity, object>> selector)
        {
            throw new NotImplementedException();
        }

        public Task<TEntity> ReadAsync(object id, Expression<Func<TEntity, TEntity>> selector)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<TEntity>> ReadAsync()
        {
            return Task.Run(() => collection.Find(new BsonDocument()).ToEnumerable());
        }

        public Task<IEnumerable<TEntity>> ReadAsync(int skipe, int take)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<TEntity>> ReadAsync(Expression<Func<TEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<object>> ReadAsync(Expression<Func<TEntity, bool>> predicate, Expression<Func<TEntity, object>> selector)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<TEntity>> ReadAsync(Expression<Func<TEntity, bool>> predicate, Expression<Func<TEntity, TEntity>> selector)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<TEntity>> ReadAsync(int skip, int take, Expression<Func<TEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<object>> ReadAsync(int skip, int take, Expression<Func<TEntity, bool>> predicate, Expression<Func<TEntity, object>> selector)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<TEntity>> ReadAsync(int skip, int take, Expression<Func<TEntity, bool>> predicate, Expression<Func<TEntity, TEntity>> selector)
        {
            throw new NotImplementedException();
        }
    }
}