using BuildAHordeBE.Data;
using BuildAHordeBE.Models;
using Microsoft.AspNetCore.Mvc;

// using Microsoft.AspNetCore.Components;
using Microsoft.IdentityModel


[Route("api/[controller]")]
[ApiController]
public class FactionController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly IConfiguration _config;

    public FactionController(AppDbContext context, IConfiguration config)
    {
        _context = context;
        _config = config;
    }

    [HttpGet]
    public async Task<ActionResult<Faction>> GetFaction(int id)
    {
        var faction = await _context.factions.FindAsync(id);
        

        return faction;
    }
}