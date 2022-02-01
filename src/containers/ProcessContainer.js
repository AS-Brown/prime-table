import { useState } from "react";
import PrimeCreator from "../components/PrimeCreator";

const ProcessContainer = ()=>{
    const [primeTable, setPrimeTable] = useState([]);

    return (
    <div>
        <PrimeCreator setPrimeTable={setPrimeTable}/>
        <p>The first {primeTable.length} numbers are {primeTable.map(a => a + " ")}</p>
    </div>
    )
}

export default ProcessContainer;