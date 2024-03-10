import { useState } from "react"

export default function Team(){
    const [teamCount, setTeam] = useState(11)

    const handleAdd = () =>{
        const newTeam = teamCount + 1;
        setTeam(newTeam);
    }
    const handleRemove = () =>{
        setTeam(teamCount - 1);
    }

    const teamStyle = {
        border: '3px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '16px'
    }

    return(
        <div style={teamStyle}>
            <h3>Players:{teamCount}</h3>
            <button onClick={handleAdd}>ADD</button>
            <button onClick={handleRemove}>REMOVE</button>
        </div>
    )
}