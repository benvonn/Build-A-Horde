
namespace BuildAHordeBE.Models
{
    public class BattleFormation
    {
        public int Formation_Id{get; set;}
        public  required string Formation_Title {get; set;}
        public required string Formation_Desc {get; set;}
        public int? Formation_Points {get; set;}
        public string? Formation_Keywords {get; set;}

        public Faction? Faction {get;}

    }
    public class BattleTactics
    {
        public int Tactics_Id {get; set;}
        public required string Tactics_Title {get; set;}
        public string? Tactics_Card {get; set;}
        public string? Tactics_Affray {get; set;}
        public string? Tactics_Domination {get; set;}

        public Faction? Faction{get;}
    }

    public class Manifestation
    {
        public int? Manifestation_Id {get; set;}
        public string? Manifestation_Title {get; set;}
        public int? Manifestation_Points {get; set;}
        public Faction? Faction{get;}
    }
    public class Prayers
    {
        public int? Prayer_Id {get; set;}
        public string? Prayer_Title {get; set;}
        public string? Prayer_Spells{get; set;}
        public Faction? Faction{get;}
    }

    public class SpellLore
    {
        public int? SpellLore_Id { get; set;}
        public string? SpellLore_Title {get; set;}
        public string? SpellLore_Spells {get; set;}
        public Faction? Faction{get;}
    }
}