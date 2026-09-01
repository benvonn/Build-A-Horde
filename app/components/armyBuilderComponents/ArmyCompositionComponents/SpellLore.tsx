import { useState } from "react"

interface SpellPrayer{
    id?: number,
    faction?: string,
    title?: string,
    spell?: string,
}

interface FactionSpellProps{
    props: SpellPrayer[]
}

export default function PrayerLore({props}: FactionSpellProps){
    const [prayerLore, setPrayerLore] = useState("")
    return (
        <>
            <div id="un">
                <select>
                {props.map((Lores) => (
                    <optgroup>
                        <option>{Lores.title}</option>
                    </optgroup>
                ))

                }
                </select>
            </div>
        </>
    )
}