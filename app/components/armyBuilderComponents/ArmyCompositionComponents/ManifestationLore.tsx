import { useState } from "react"

interface FactionManifestation{
    id: number,
    faction: string,
    title: string,
    points?: number
}
interface FactionManifestationProps{
    props: FactionManifestation[]
}

export default function ManiefestionLore({props} : FactionManifestationProps){
    const [manifestionLore, setManifestionLore] = useState("")
    return(
        <>
            <div id="checkboxListContainer">
                <span>Manifestion Lore</span>
                <select value={manifestionLore} onChange={e => setManifestionLore(e.target.value)}>
                    <optgroup label="Universal">
                        <option value="aetherwrought">Aetherwrought Machineries</option>
                        <option value="forbiddenpower">Forbidden Power</option>
                        <option value="krondspine">Krondspine Incarnate</option>
                        <option value="morbidconjuration">Morbid Conjuration</option>
                        <option value="twilit">Twilit Sorceries</option>

                    </optgroup>
                        {props.map((title) => (
                        <optgroup label={title.faction}>
                            <option value={title.title}>{title.title}</option>
                        </optgroup>
                        ))}

                </select>

            </div>
        </>
    )
}