using Microsoft.EntityFrameworkCore;
using BuildAHordeBE.Models;

namespace BuildAHordeBE.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options){ }

        public DbSet<Faction> factions{get; set;}
        public DbSet<BattleFormation> battleFormations{get; set;}
        public DbSet<BattleTactic> battleTactics{get; set;}
        public DbSet<Manifestation> manifestations{get; set;}
        public DbSet<Prayer> prayers{get; set;}
        public DbSet<SpellLore> spellLores{get; set;}


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<BattleFormation>()
                .HasOne(b => b.Faction)
                .WithMany(f => f.BattleFormations)
                .HasForeignKey(b => b.FactionId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<BattleTactic>()
                .HasOne(b =>b.Faction)
                .WithMany(f => f.BattleTactics)
                .HasForeignKey(b => b.FactionId)
                .OnDelete(DeleteBehavior.Restrict);
            modelBuilder.Entity<Manifestation>()
                .HasOne(m => m.Faction)
                .WithMany(f => f.Manifestations)
                .HasForeignKey(m => m.FactionId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Prayer>()
                .HasOne(p =>p.Faction)
                .WithMany(f => f.Prayers)
                .HasForeignKey(p => p.FactionId)
                .OnDelete(DeleteBehavior.Restrict);
            modelBuilder.Entity<SpellLore>()
                .HasOne(s => s.Faction)
                .WithMany(f => f.SpellLores)
                .HasForeignKey(s => s.FactionId)
                .OnDelete(DeleteBehavior.Restrict);
        }
        
    }
}
    