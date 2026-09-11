"use client"
import UnitCard from "../components/unitcard"
import { useState } from "react";
import BattleFormationInfoTemplate from "../components/armyBuilderComponents/ArmyCompositionComponents/battleformationinfo";
import BattleTacticTemplate from "../components/armyBuilderComponents/ArmyCompositionComponents/battleTactic";

const BASE_URL = '/api/get/factions'

interface FactionData {
    id: number;
    name: string;
    alliance: string;
}

export default function HordeBuilder() {
    const [faction, setFaction] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {

        const selectedFaction = e.target.value;
        
        setFaction(selectedFaction);
        setError(null); 
        
        if (selectedFaction) {
            fetchFaction(selectedFaction);
        }
    }

    const fetchFaction = async (name: string) => {
        if (!name) return;
        
        setLoading(true);
        try {
            const res = await fetch(`${BASE_URL}?name=${encodeURIComponent(name)}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });

            if (!res.ok) {
                throw new Error(`Error: status ${res.status}`);
            }

            const data = await res.json();
            
            const factionInfo = {
                id: data.id,
                name: data.name,
                alliance: data.alliance
            };
            

        } catch (err) {
            setError(err instanceof Error ? err.message : "Unknown Error");
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    const handleFactionSubmit = async () => {
        console.log("Submitting faction:", faction);
    }

    return (
        <div id="buildArea">
            <div id="army">
                <div id="basicInfo">
                    <label htmlFor="faction-select">Faction:</label>
                    <select 
                        value={faction} 
                        onChange={(e) => handleChange(e)} 
                        className="text-black bg-white"
                    >
                        <option value="" disabled>Select a faction...</option>
                        <optgroup label="Grand Alliance Order">
                            <option value="stormcast">Stormcast Eternals</option>
                            <option value="sigmar">Cities of Sigmar</option>
                            <option value="lumineth">Lumineth Realm-Lords</option>
                            <option value="sylvaneth">Sylvaneth</option>
                            <option value="idoneth">Idoneth Deepkin</option>
                            <option value="fyreslayers">Fyreslayers</option>
                            <option value="kharadron">Kharadron Overlords</option>
                        </optgroup>
                        <optgroup label="Grand Alliance Chaos">
                            <option value="seraphon">Seraphon</option>
                            <option value="skaven">Skaven</option>
                            <option value="slaves">Slaves to Darkness</option>
                            <option value="kharne">Blades of Khorne</option>
                            <option value="nurgling">Maggotkin of Nurgle</option>
                            <option value="slaanesh">Hedonites of Slaanesh</option>
                            <option value="tzeentch">Disciples of Tzeentch</option>
                        </optgroup>
                        <optgroup label="Grand Alliance Death">
                            <option value="gravelords">Soulblight Gravelords</option>
                            <option value="ossiarch">Ossiarch Bonereapers</option>
                            <option value="nighthaunt">Nighthaunt</option>
                            <option value="flesh">Flesh-Eater Courts</option>
                        </optgroup>
                        <optgroup label="Grand Alliance Destruction">
                            <option value="ironjawz">Ironjawz</option>
                            <option value="kruleboyz">Kruleboyz</option>
                            <option value="gloomspite">Gloomspite Gitz</option>
                            <option value="behemat">Sons of Behemat</option>
                            <option value="ogor">Ogor Mawtribes</option>
                        </optgroup>
                    </select>
                    
                    {loading && <span className="ml-2 text-sm text-gray-500">Loading...</span>}
                    {error && <span className="ml-2 text-sm text-red-500">Error: {error}</span>}
                    
                    <button type="button" onClick={handleFactionSubmit}>Submit</button>
                    <button type="reset" onClick={() => setFaction('')}>Reset</button>
                </div>
                
                {faction && (
                    <p className="mt-2 text-lg font-bold">Selected: {faction}</p>
                )}
            </div>
        </div>
    )
}