import { useState } from "react"

interface FactionPrayer{
    id: number,
    faction: string,
    title: string,
    spell: string,
}

interface FactionPrayerProps{
    props: FactionPrayer[]
}

export default function PrayerLore({props}: FactionPrayerProps){
    const [prayerLore, setPrayerLore] = useState("")
    return (
        <>
            <div id="universalPrayer">
                <select>
                    <option value={"universalPrayer"}>Universal Prayers</option>
                    {props.map((title) => (
                        <option value={title.title}>{title.title}</option>
                    ))}
                </select>
            </div>
        </>
    )
}