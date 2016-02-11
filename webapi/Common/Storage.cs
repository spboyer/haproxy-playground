using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Extensions.OptionsModel;
using webapi.Model;
using GenFu;

namespace webapi.Common
{
    public class Storage : IStorage
    {
        private IOptions<AppSettings> Settings;
        public Storage(IOptions<AppSettings> appSettings)
        {
            Settings = appSettings;
        }

        public async Task<int> AddItemToArray(string key, string item)
        {
            var result = await DoCommand("RPUSH", key, item);
            return Newtonsoft.Json.JsonConvert.DeserializeObject<RPUSH_Item>(result).RPUSH;
        }

        public async Task<string[]> GetArray(string key, int fromIndex, int toIndex)
        {
            var result = await DoCommand("LRANGE", key, fromIndex, toIndex);
            return Newtonsoft.Json.JsonConvert.DeserializeObject<LRANGE_Item>(result).LRANGE;
        }

        public async Task<string> GetItem(string key)
        {
            string result = await DoCommand("GET", key);
            return Newtonsoft.Json.JsonConvert.DeserializeObject<GET_Item>(result).GET;
        }

        public async void SetItem(string key, string item)
        {
           await DoCommand("SET", key, item);
        }

        public bool KeyExists(string key)
        {
            var result = DoCommand("EXISTS", key).Result;
            return Newtonsoft.Json.JsonConvert.DeserializeObject<EXISTS_Item>(result).EXISTS == 1;
        }

        private async Task<string> DoCommand(string command, string key, int fromIndex, int toIndex)
        {
            var client = new HttpClient();

            var url = string.Format("http://{0}/{1}/{2}/{3}/{4}", Settings.Value.RedisServer + ":" + Settings.Value.RedisPort, command, key, fromIndex.ToString(), toIndex.ToString());

            var response = await client.GetAsync(url);

            return await response.Content.ReadAsStringAsync();
        }
	    private async Task<string> DoCommand(string command, string key, string item = null)
        {
            var client = new HttpClient();

            var url = string.Format("http://{0}/{1}/{2}", Settings.Value.RedisServer + ":" + Settings.Value.RedisPort, command, key);

            if (item != null)
            {
                url += "/" + item;
            }

            var response = await client.GetAsync(url);

            return await response.Content.ReadAsStringAsync();
        }

        public void PrimeData()
        {
            var exists = KeyExists("heroes");
            if (!exists)
            {
                var heroes = A.ListOf<Hero>();

                heroes.ForEach(async h =>
                {
                    if (!string.IsNullOrWhiteSpace(h.SuperName))
                        await AddItemToArray("heroes", h.SuperName);
                });

                SetItem("heroes", "true");
            }
        }

        private class GET_Item
        {
            public string GET { get; set; }
        }

        private class RPUSH_Item
        {
            public int RPUSH { get; set; }
        }

        private class LRANGE_Item
        {
            public string[] LRANGE { get; set; }
        }

        private class EXISTS_Item
        {
            public int EXISTS { get; set; }
        }
    }

    public interface IStorage
    {
        Task<string> GetItem(string key);
        void SetItem(string key, string item);
        Task<int> AddItemToArray(string key, string item);
        Task<string[]> GetArray(string key, int fromIndex, int toIndex);
        bool KeyExists(string key);
        void PrimeData();
    }
}