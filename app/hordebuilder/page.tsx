"use client"
import ArmyTemplate from "../components/armyBuilderComponents/template";
import UnitCard from "../components/unitcard"
import { useState } from "react";
import BattleFormationInfoTemplate from "../components/armyBuilderComponents/ArmyCompositionComponents/battleformationinfo";
import BattleTacticTemplate from "../components/armyBuilderComponents/ArmyCompositionComponents/battleTactic";
export default function HordeBuilder(){
    const [faction, setFaction] = useState('stormcast');

    const handleFactionSubmit = async () => {
        // Get request to reciev all data for selected faction
        // On success display rest of army builder with associated data populated
        console.log("Submitting..." ,{faction})
    }
    return(
    <div id="buildArea">
        <div id="army">
            <div id="basicInfo">
                <label htmlFor="faction-select">Faction:</label>
                <select value={faction} onChange={e => setFaction(e.target.value)} className="text-black bg-white">
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
                <button type="submit" onClick={handleFactionSubmit}>Submit</button>
            </div>
            <ArmyTemplate/>
        </div>
    </div>)
}