using BuildAHordeBE.Data;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace BuildAHordeBE.Service
{
    public class RetrieveFaction
    {
        
        private readonly AppDbContext _context;

        public RetrieveFaction(AppDbContext context)
        {
            _context = context;
        }
        public async Task<string> GetFactionByIdAsync(int FactionId)
        {
            var faction = await _context.factions
                            .Where(f => f.FactionId == FactionId)
                            .Select(f => f.FactionName)
                            .FirstOrDefaultAsync();

            return faction;
            
        }

    
    }
}