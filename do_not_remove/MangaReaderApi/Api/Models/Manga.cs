using System.Collections.Generic;
using Api.Utilities.Schema;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Api.Models
{
    [Collection("Manga")]
    public class Manga
    {
        [BsonId]
        public ObjectId Id { get; set; }

        [BsonElement("title")]
        public string Title { get; set; }

        [BsonElement("alt")]
        public IEnumerable<string> AlternateNames { get; set; }

        [BsonElement("stub")]
        public string Stub { get; set; }

        [BsonElement("author")]
        public string Author { get; set; }

        [BsonElement("artist")]
        public string Artist { get; set; }

        [BsonElement("genres")]
        public IEnumerable<int> Genres { get; set; }

        [BsonElement("type")]
        public int Type { get; set; }

        [BsonElement("rank")]
        public int Rank { get; set; }

        [BsonElement("rating")]
        public float Rating { get; set; }

        [BsonElement("description")]
        public string Description { get; set; }

        [BsonElement("comments")]
        public IEnumerable<Comment> Comments { get; set; }

        [BsonElement("chapters")]
        public IEnumerable<Chapter> Chapters { get; set; }

        [BsonElement("status")]
        public int Status { get; set; }
    }
}