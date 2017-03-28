using System.Collections;
using System.Collections.Generic;
using MongoDB.Bson.Serialization.Attributes;

namespace Api.Models
{
    public class Comment
    {
        [BsonElement("user")]
        public int UserId { get; set; }

        [BsonElement("content")]
        public string Content { get; set; }

        [BsonElement("likes")]
        public int Likes { get; set; }

        [BsonElement("replies")]
        public IEnumerable<Comment> Replies { get; set; }

        [BsonElement("status")]
        public int Status { get; set; }
    }
}