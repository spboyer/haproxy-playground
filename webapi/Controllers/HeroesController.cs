using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using webapi.Model;
using GenFu;
using StackExchange.Redis;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    public class HeroesController : Controller
    {
        private IDatabase _db;

        public HeroesController()
        {
            ConnectionMultiplexer redis = ConnectionMultiplexer.Connect("192.168.99.100:32772");
            _db = redis.GetDatabase();

            LoadHeroes();
        }

        // GET: api/heroes
        [HttpGet]
        public List<TourHero> Get()
        {
            var heroes = new List<TourHero>();
            for ( var i = 1; i < 26; i ++ )
            {
                var name = _db.StringGet(i.ToString());
                if (!string.IsNullOrWhiteSpace(name))
                    heroes.Add(new TourHero(){Id = i, Name = name});
            }

            return heroes;
        }

        // GET api/heroes/5
        [HttpGet("{id}")]
        public TourHero Get(int id)
        {
            string heroId = id.ToString();
            var exists = _db.KeyExists(heroId);

            if (exists)
            {
                var item = _db.StringGet(heroId);
                hero = new TourHero()
                hero.Id = id;
                hero.Name = item;

                return hero;
            }

            return null;
        }

        private void LoadHeroes()
        {
            var exists = _db.KeyExists("heroes");
            if (!exists)
            {
                A.Configure<Hero>()
                    .Fill(p => p.Id)
                    .WithinRange(1, 25);

                var heroes = A.ListOf<Hero>();
                heroes.ForEach(h =>
                {
                    if (!string.IsNullOrWhiteSpace(h.SuperName))
                        _db.StringSet(h.Id.ToString(), h.SuperName);
                });

                _db.StringSet("heroes", true);
            }
        }
    }
}
