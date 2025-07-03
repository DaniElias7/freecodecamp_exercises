function insertionSort(array) {

    let sortedArray = [];
    let unSortedArray = [...array];


    let everyElementIsANumber = unSortedArray.every(element => typeof element === 'number' && Number.isFinite(element)); 

    if (Array.isArray(unSortedArray) && unSortedArray.length !== 0 && everyElementIsANumber) {

        for (const [firstElementIndex, firstElementValue] of unSortedArray.entries()) {

            if (firstElementIndex === 0) {

                sortedArray.push(firstElementValue);
                
            } else {

                for (const [secondElementIndex, secondElementValue] of sortedArray.entries()) {

                    if (
                        firstElementValue <= secondElementValue
                    )
                    {
                        
                        sortedArray.splice(secondElementIndex, 0, firstElementValue);
                        
                        break;

                    } else if (secondElementIndex === sortedArray.length - 1 && firstElementValue > secondElementValue) {
                        sortedArray.push(firstElementValue);
                        break;
                    }

                }
            }
        }
        
        return sortedArray;

    } else {
        throw new Error("The argument passed isn't valid. Please pass an array with only numbers");
        
    }
    
}

insertionSort([1,4,2, 8,345,123,43,32,5643,63,123,43,2,55,1,234,92])