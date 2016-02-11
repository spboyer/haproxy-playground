using System.Collections.Generic;
using Microsoft.AspNet.Mvc;
using webapi.Model;
using GenFu;

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
            // for ( var i = 1; i < 26; i ++ )
            // {
            //     var name = _storage.GetItem(i.ToString()).Result;
            //     if (!string.IsNullOrWhiteSpace(name))
            //         heroes.Add(new TourHero(){Id = i, Name = name});
            // }

            var items = _storage.GetArray("heroes", 0, 25).Result;
            
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
            string heroId = id.ToString();
            var exists = _storage.KeyExists(heroId);

            if (exists)
            {
                var item = _storage.GetItem(heroId);
                var hero = new TourHero();
                hero.Id = id;
                hero.Name = item.Result;

                return hero;
            }

            return null;
        }
    }
}
