using MongoDB.Bson.Serialization.Attributes;

namespace Api.Models
{
    public class Page
    {
        [BsonElement("number")]
        public int Number { get; set; }

        [BsonElement("filename")]
        public string FileName { get; set; }
    }
}