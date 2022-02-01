import { useState } from "react";
import PrimeCreator from "../components/PrimeCreator";
import TableCreator from "../components/TableCreator";

const ProcessContainer = ()=>{
    const [primeTable, setPrimeTable] = useState([]);

    return (
    <div>
        <PrimeCreator setPrimeTable={setPrimeTable}/>
        <p>The first {primeTable.length} numbers are {primeTable.map(a => a + " ")}</p>
        <TableCreator primeTable={primeTable}/>
    </div>
    )
}

export default ProcessContainer;