using System;
using Microsoft.Extensions.Configuration;

namespace Api.Configuration
{
    public class ConfigurationManager
    {
        private static ConfigurationManager instance;

        public IConfiguration Configuration { get; }

        private ConfigurationManager(IConfiguration configuration)
        {
            Configuration = configuration ?? throw new ArgumentNullException(nameof(configuration));
        }

        public static ConfigurationManager GetInstance()
        {
            if (instance == null)
            {
                throw new MissingFieldException(
                    $"The instance for the class {nameof(ConfigurationManager)} is not initialized"
                );
            }

            return instance;
        }

        public static ConfigurationManager GetInstance(IConfiguration configuration)
        {
            return instance ?? (instance = new ConfigurationManager(configuration));
        }
    }
}