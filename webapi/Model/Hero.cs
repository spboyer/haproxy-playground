using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webapi.Model
{
    public class Hero
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Alias { get; set; }

        public string SuperName
        {
            get { return FirstName + ' ' + char.ToUpper(Alias[0]) + Alias.Substring(1); }
        }

        public Hero()
        {

        }
    }
}
