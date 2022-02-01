const TableCreator = ({primeTable}) => {

    const primeHeader = ()=>{
        let header = "| |";
        for (let index = 0; index < primeTable.length; index++) {
            let right = primeTable[index];
            header += "" + right + "|";            
        }
        header += "\n";
        return header;
    }

    const primeColumn = ()=>{
        let column = "";
        let interval = 0
        for (let index = 0; index < primeTable.length; index++) {
            let down = primeTable[index];
            let row = primeRows(interval);
            column += "|" + down + "|" + row + "\n";
            interval += 1           
        };
        return column;
    }

    function primeRows (statusStationary) {
        let stationary = primeTable[statusStationary];
        let multiplier = "";
        for (let index = 0; index < primeTable.length; index ++){
            let row = primeTable[index];
            multiplier += row * stationary + "|";
        }
        return multiplier;
    }

    return (
    <div>
        {primeHeader()}
        {primeColumn()}
    </div>
    )
}

export default TableCreator;