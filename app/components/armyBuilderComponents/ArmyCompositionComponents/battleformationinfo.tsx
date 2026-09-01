import { useState } from "react";
import { HiChevronDown } from "@react-icons/all-files/hi/HiChevronDown";

interface InfoDropdown {
    id: number,
    faction: string,
    title: string,
    info: string,
    points?: number,
    keywords?: string | null;
}

interface InfoDropdownProps {
    titles: InfoDropdown[];
}


export default function BattleFormationInfoTemplate({titles}: InfoDropdownProps){
    const [isOpened, setIsOpened] = useState(false);

    const handleDisplayInfo = async () => {
        if (!isOpened) {
            setIsOpened(true);
        }else{
            setIsOpened(false);
        }
    }
    
    return(
        <>
        <label>This for Battle Formation</label>
        <button onClick={handleDisplayInfo}><HiChevronDown/></button>
            {isOpened && (
                <div id="dropDownContainer">
                    <p>this is to check button works</p>
                    {titles.map((title) => (
                    <div key={title.id}>
                        <h2>{title.title}</h2>
                        <p>{title.info}</p>
                        <h3>{title.keywords}</h3>
                    </div>
                    ))}
                </div>
            )}
        </>
    )
}