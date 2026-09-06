namespace BuildAHordeBE.Models
{
    public class Faction
    {
        public required int FactionId {get; set;}
        public required string FactionName {get; set;}
        public required string FactionAlliance {get;set;}

        public ICollection<BattleFormation> BattleFormations {get; set;} = new List<BattleFormation>();

        public ICollection<BattleTactic> BattleTactics {get; set;} = new List<BattleTactic>();

        public ICollection<Manifestation>? Manifestations {get; set;} = new List<Manifestation>();
        public ICollection<Prayer>? Prayers {get; set;} = new List<Prayer>();
        public ICollection<SpellLore>? SpellLores {get; set;} = new List<SpellLore>();
    }
}