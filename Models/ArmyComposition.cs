
namespace BuildAHordeBE.Models
{
    public class BattleFormation
    {
        public int Id{get; set;}
        public  required string BattleFormationTitle {get; set;}
        public required string BattleFormationDesc {get; set;}
        public int? BattleFormationPoints {get; set;}
        public string? BattleFormationKeywords {get; set;}
        public int FactionId {get; set;}

        public Faction? Faction {get;set;}

    }
    public class BattleTactic
    {
        public int Id {get; set;}
        public required string BattleTacticsTitle {get; set;}
        public string? BattleTacticsCard {get; set;}
        public string? BattleTacticsAffray {get; set;}
        public string? BattleTacticsDomination {get; set;}
        public int FactionId {get; set;}

        public Faction? Faction{get; set;}
    }

    public class Manifestation
    {
        public int? Id {get; set;}
        public string? ManifestationTitle {get; set;}
        public int? ManifestationPoints {get; set;}
        public int FactionId {get; set;}
        public Faction? Faction{get;set;}
    }
    public class Prayer
    {
        public int? Id {get; set;}
        public string? PrayerTitle {get; set;}
        public string? PrayerSpells{get; set;}
        public int FactionId {get; set;}
        public Faction? Faction{get;set;}
    }

    public class SpellLore
    {
        public int? Id { get; set;}
        public string? SpellLoreTitle {get; set;}
        public string? SpellLoreSpells {get; set;}
        public int FactionId {get; set;}
        public Faction? Faction{get;set;}
    }
}