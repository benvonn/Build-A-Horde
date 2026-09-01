
const UNIT_URL = "${BASE_URL}/api/unit"
    interface UnitCardInfo{
        name: string,
        points: number,
        unitNum: number,
        role: string,
        keywords: string,
        image?: File,
    }

export default async function UnitCard({unitId }: { unitId: string }){


        const res = await fetch(`${UNIT_URL}/${unitId}`, {
            method:"GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        if (!res.ok){
            console.error("Failed to retrieve")
        }
            console.log("RESPONSE IS OK!")
            const data: UnitCardInfo = await res.json();

    return(
        <div>
            <div id="Image">
                {data.image && <img src={data.image} />}
            </div>
            <div id="info">
                <h3>{data.name}</h3>
                <p>{data.points}</p>
                <p>{data.unitNum}</p>
                <p>{data.role}</p>
                <p>{data.keywords}</p>
            </div>
        </div>
    )
}