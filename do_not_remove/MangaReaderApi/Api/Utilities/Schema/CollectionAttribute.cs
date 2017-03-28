using System;

namespace Api.Utilities.Schema
{
    public class CollectionAttribute : Attribute
    {
        public string Name { get; }

        public CollectionAttribute(string name)
        {
            Name = name;
        }
    }
}