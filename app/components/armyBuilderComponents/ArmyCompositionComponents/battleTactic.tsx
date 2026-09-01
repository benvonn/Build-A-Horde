import { HiChevronDown } from "@react-icons/all-files/hi/HiChevronDown";
import { useState } from "react"
interface BattleTacticCard {
    id: number,
    title: string,
    card?: string,
    affray?: string,
    strike?: string,
    domination?: string | null,
}
interface BattleTacticCardProps{
    cardProps: BattleTacticCard[]
}
export default function BattleTacticTemplate({cardProps} : BattleTacticCardProps){
    const [isOpened, setIsOpened] = useState(Boolean)

    const handleDisplayCardInfo = async () => {
        if (!isOpened) {
            setIsOpened(true);
        }else{setIsOpened(false)}
    }
    
    return(
        <>
        <label htmlFor="battleTactic">Hello the Battle Tactic Card is here</label>
        <button onClick={handleDisplayCardInfo}><HiChevronDown/></button>
        {isOpened && (
            <div id="CardTacticInfo">
                <p>this is to check it works</p>
                {cardProps.map((card) => (
                    <table key={card.id}>
                        <tr>
                            <th>{card.title}</th>
                        </tr>
                        <tr><td>{card.card}</td></tr>
                        <tr><td>{card.affray}</td></tr>
                        <tr><td>{card.strike}</td></tr>
                        <tr><td>{card.domination}</td></tr>
                    </table>

                ))

                }
            </div>
        )}
        </>
    )
}