using Microsoft.EntityFrameworkCore;
using BuildAHordeBE.Models;

namespace BuildAHordeBE.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options){ }

        public DbSet<Faction> factions{get; set;}
        public DbSet<BattleFormation> battleFormations{get; set;}
        public DbSet<BattleTactics> battleTactics{get; set;}
        public DbSet<Manifestation> manifestations{get; set;}
        public DbSet<Prayers> prayers{get; set;}
        public DbSet<SpellLore> spellLores{get; set;}


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<BattleFormation>()
                .HasOne(b => b.Faction)
                .WithMany()
                .HasForeignKey(b => b.Faction)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<BattleTactics>()
                .HasOne(b =>b.Faction)
                .WithMany()
                .HasForeignKey(b => b.Faction)
                .OnDelete(DeleteBehavior.Restrict);
        }
        
    }
}
    