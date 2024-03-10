import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);

    const handleClick = () =>{
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleReduce = () =>{
        const newCount = count -1;
        setCount(newCount);
    }

    return(
        <div style={{border:'3px solid yellow'}}>
            <h3>Counter:{count}</h3>
            <button onClick={handleClick}>ADD ME</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}