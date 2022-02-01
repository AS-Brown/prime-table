import React from "react";

const PrimeCreator = ({setPrimeTable}) => {

    const handleLengthChange = (event) => {
        createPrimeList(event.target.value)
    }

    const createPrimeList = size => {
        let currentNum = 2
        const numArray = []
        let divideNum = 2
        while(numArray.length < size){
            if (currentNum % divideNum === 0 && currentNum !== divideNum){
                currentNum += 1;
                divideNum = 2;
            } else if (currentNum % divideNum === 0 && currentNum === divideNum){
                numArray.push(currentNum)
                currentNum += 1 
                divideNum = 2
            } else {
                divideNum += 1;
            }
        }
        setPrimeTable(numArray)
        }

    return (
        <>
        <form>
            <input type="number" id="lengthOfGrid" name="lengthOfGrid" required onChange={handleLengthChange} placeholder="Enter grid size"/>
        </form>
        </>
    )
}

export default PrimeCreator;