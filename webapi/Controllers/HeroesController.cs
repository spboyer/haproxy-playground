using System.Collections.Generic;
using Microsoft.AspNet.Mvc;
using webapi.Model;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    public class HeroesController : Controller
    {
        Common.IStorage _storage;

        public HeroesController(Common.IStorage storage)
        {
            _storage = storage;
            _storage.PrimeData();
        }

        // GET: api/heroes
        [HttpGet]
        public List<TourHero> Get()
        {
            var heroes = new List<TourHero>();
            var items = _storage.GetArray("heroes", 0, -1).Result;

            for (var i = 0; i < items.Length; i++)
            {
                heroes.Add(new TourHero(){Id = i, Name = items[i]});
            }

            return heroes;
        }

        // GET api/heroes/5
        [HttpGet("{id}")]
        public TourHero Get(int id)
        {
            var exists = _storage.KeyExists("heroes", id.ToString());
            if (exists)
            {
                var item = _storage.GetArray("heroes", id, id);
                var hero = new TourHero();
                hero.Id = id;
                hero.Name = item.Result[0];

                return hero;
            }

            return null;
        }
    }
}
