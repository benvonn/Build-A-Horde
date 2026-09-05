namespace BuildAHordeBE.Models
{
    public class Faction
    {
        public required int Id {get; set;}
        public required string Name {get; set;}

        public BattleFormation? BattleFormation{get; set;}
        public BattleTactics? BattleTactics{get; set;}
        public Manifestation? Manifestation{get; set;}
        public Prayers? Prayers {get; set;}
        public SpellLore? SpellLore {get; set;}
    }
}