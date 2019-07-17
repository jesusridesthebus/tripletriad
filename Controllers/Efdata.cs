using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace my_new_app.Context
{

	public class DataContext : DbContext
	{
		public DbSet<Card> Card { get; set; }

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseMySQL("server=localhost;database=tripleTriad;user=root;password=root;port=8889;");
		}
	}

	public class Card
	{
		public int Top { get; set; }
		public int Bottom { get; set; }
		public int Left { get; set; }
		public int Right { get; set; }
		public int Id { get; set; }
		public string CardOwner { get; set; }
		public string Image { get; set; }
	}

// public class Game
// {
// 	public List<Card> Deck { get; set; } = new List<Card>();
// }

}
