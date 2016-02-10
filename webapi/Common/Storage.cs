using System.Net.Http;
using System.Threading.Tasks;

namespace webapi.Common
{
    public class Storage : IStorage
    {
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

        public async Task<bool> KeyExists(string key)
        {
            var result = await DoCommand("EXISTS", key);
            return Newtonsoft.Json.JsonConvert.DeserializeObject<EXISTS_Item>(result).EXISTS == 1;
        }

        private async Task<string> DoCommand(string command, string key, int fromIndex, int toIndex)
        {
            var client = new HttpClient();

            var url = string.Format("http://{0}/{1}/{2}/{3}/{4}", "192.168.99.100:7379", command, key, fromIndex.ToString(), toIndex.ToString());

            var response = await client.GetAsync(url);

            return await response.Content.ReadAsStringAsync();
        }
	    private async Task<string> DoCommand(string command, string key, string item = null)
        {
            var client = new HttpClient();

            var url = string.Format("http://{0}/{1}/{2}", "192.168.99.100:7379", command, key);

            if (item != null)
            {
                url += "/" + item;
            }

            var response = await client.GetAsync(url);

            return await response.Content.ReadAsStringAsync();
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
        Task<bool> KeyExists(string key);
    }
}