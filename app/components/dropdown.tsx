import { HiChevronDown } from "@react-icons/all-files/hi/HiChevronDown";
import { useState } from "react";

interface FactionPrayerHolder{
    id: number,
    faction: string,
    title: string,
    spell: string,
    description: string,
}

interface HolderProps{
    props: FactionPrayerHolder[]
}
export default function PrayerinfoDropdownTemplate({props}: HolderProps){
    const [isOpened, setIsOpened] = useState(false)
    const handleDropdown = async () => {
        
        if(!isOpened) {setIsOpened(true)}else {setIsOpened(false)}
    }
    return(
        <>
        <button onClick={handleDropdown}><HiChevronDown/></button>
        {isOpened && (
            <div>
                <p>This is a dropdown info</p>
                {props.map((spells) => (
                    <table>
                        <tr>
                            <th><h2>{spells.title}</h2></th>
                        </tr>
                        <tr><td><h3>{spells.faction}</h3></td></tr>
                        <tr><td><p>{spells.spell}</p></td></tr>
                        <tr><td><p>{spells.description}</p></td></tr>
                    </table>
                ))}
            </div>
        )}
        </>
    )
}