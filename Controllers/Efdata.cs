using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace my_new_app.Context
{

	public class DataContext : DbContext
	{
		public DbSet<Stuff> Stuff { get; set; }	

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseMySQL("server=localhost;database=overreaction;user=root;password=root;port=8889;");
		}		
	}

	public class Stuff
	{
		public int Id { get; set; }
		public int Day { get; set; }
		public int Season { get; set; }
		public int Year { get; set; }		
	}

}