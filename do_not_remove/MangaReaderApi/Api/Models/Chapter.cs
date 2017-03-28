using System;
using System.Collections.Generic;
using MongoDB.Bson.Serialization.Attributes;

namespace Api.Models
{
    public class Chapter
    {
        [BsonElement("number")]
        public int Number { get; set; }

        [BsonElement("volume")]
        public int Volume { get; set; }

        [BsonElement("release")]
        public DateTime ReleaseDate { get; set; }

        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("pages")]
        public IEnumerable<Page> Pages { get; set; }
    }
}