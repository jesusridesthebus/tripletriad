using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using my_new_app.Context;

namespace my_new_app.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {


        public static string[] Summaries = new[]
        {

            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public IEnumerable<Card> Cards()
        {
            using (var db = new DataContext())
			{
                var deck = db.Card.ToList();

            var rng = new Random();
            return deck;
            // return Enumerable.Range(1, 5).Select(index => deck
            // // {
            // //     DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
            // //     TemperatureC = rng.Next(-20, 55),
            // //     Summary = Summaries[rng.Next(Summaries.Length)]
            // // }
            // );
            }
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }
    }
}
