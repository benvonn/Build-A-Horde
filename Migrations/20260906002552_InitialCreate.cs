using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace BuildAHordeBE.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "factions",
                columns: table => new
                {
                    FactionId = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    FactionName = table.Column<string>(type: "text", nullable: false),
                    FactionAlliance = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_factions", x => x.FactionId);
                });

            migrationBuilder.CreateTable(
                name: "battleFormations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    BattleFormationTitle = table.Column<string>(type: "text", nullable: false),
                    BattleFormationDesc = table.Column<string>(type: "text", nullable: false),
                    BattleFormationPoints = table.Column<int>(type: "integer", nullable: true),
                    BattleFormationKeywords = table.Column<string>(type: "text", nullable: true),
                    FactionId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_battleFormations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_battleFormations_factions_FactionId",
                        column: x => x.FactionId,
                        principalTable: "factions",
                        principalColumn: "FactionId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "battleTactics",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    BattleTacticsTitle = table.Column<string>(type: "text", nullable: false),
                    BattleTacticsCard = table.Column<string>(type: "text", nullable: true),
                    BattleTacticsAffray = table.Column<string>(type: "text", nullable: true),
                    BattleTacticsDomination = table.Column<string>(type: "text", nullable: true),
                    FactionId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_battleTactics", x => x.Id);
                    table.ForeignKey(
                        name: "FK_battleTactics_factions_FactionId",
                        column: x => x.FactionId,
                        principalTable: "factions",
                        principalColumn: "FactionId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "manifestations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    ManifestationTitle = table.Column<string>(type: "text", nullable: true),
                    ManifestationPoints = table.Column<int>(type: "integer", nullable: true),
                    FactionId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_manifestations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_manifestations_factions_FactionId",
                        column: x => x.FactionId,
                        principalTable: "factions",
                        principalColumn: "FactionId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "prayers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    PrayerTitle = table.Column<string>(type: "text", nullable: true),
                    PrayerSpells = table.Column<string>(type: "text", nullable: true),
                    FactionId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_prayers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_prayers_factions_FactionId",
                        column: x => x.FactionId,
                        principalTable: "factions",
                        principalColumn: "FactionId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "spellLores",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    SpellLoreTitle = table.Column<string>(type: "text", nullable: true),
                    SpellLoreSpells = table.Column<string>(type: "text", nullable: true),
                    FactionId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_spellLores", x => x.Id);
                    table.ForeignKey(
                        name: "FK_spellLores_factions_FactionId",
                        column: x => x.FactionId,
                        principalTable: "factions",
                        principalColumn: "FactionId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_battleFormations_FactionId",
                table: "battleFormations",
                column: "FactionId");

            migrationBuilder.CreateIndex(
                name: "IX_battleTactics_FactionId",
                table: "battleTactics",
                column: "FactionId");

            migrationBuilder.CreateIndex(
                name: "IX_manifestations_FactionId",
                table: "manifestations",
                column: "FactionId");

            migrationBuilder.CreateIndex(
                name: "IX_prayers_FactionId",
                table: "prayers",
                column: "FactionId");

            migrationBuilder.CreateIndex(
                name: "IX_spellLores_FactionId",
                table: "spellLores",
                column: "FactionId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "battleFormations");

            migrationBuilder.DropTable(
                name: "battleTactics");

            migrationBuilder.DropTable(
                name: "manifestations");

            migrationBuilder.DropTable(
                name: "prayers");

            migrationBuilder.DropTable(
                name: "spellLores");

            migrationBuilder.DropTable(
                name: "factions");
        }
    }
}
