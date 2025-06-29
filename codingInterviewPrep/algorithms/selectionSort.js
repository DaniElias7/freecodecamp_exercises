function selectionSort(array) {

    let sortedArray = array;

    let everyElementIsANumber = sortedArray.every(element => typeof element === 'number' && Number.isFinite(element)); 

    if (Array.isArray(sortedArray) && sortedArray.length !== 0 && everyElementIsANumber) {
        
        let currentLowestNumber = 0;
        let indexOfCurrentLowestNumber = 0;

        for (
            const [indexOfFirstElement, valueOfFirstElement] of sortedArray.entries()
        ) 
        {

            if (indexOfFirstElement === sortedArray.length - 1) {
                
                for (const [lastIterationElementIndex, lastIterationElementValue] of sortedArray.entries()) {
                    if (valueOfFirstElement < lastIterationElementValue) {
        
                        sortedArray.splice(lastIterationElementIndex, 0, valueOfFirstElement);
                        sortedArray.pop();
                        
                        return sortedArray;

                    }
                }
            }

            currentLowestNumber = valueOfFirstElement;
            indexOfCurrentLowestNumber = indexOfFirstElement;

            for (
                const [indexOfSecondElement, valueOfSecondElement] of sortedArray.entries()
            ) 
            {
                if (indexOfFirstElement >= indexOfSecondElement) {

                    continue;

                } else if (indexOfSecondElement === sortedArray.length - 1) {
                    [ sortedArray[indexOfFirstElement], sortedArray[indexOfCurrentLowestNumber] ] 
                    = 
                    [ sortedArray[indexOfCurrentLowestNumber], sortedArray[indexOfFirstElement] ];
                } else {
                    if (valueOfSecondElement < currentLowestNumber) {
                        
                        currentLowestNumber = valueOfSecondElement;

                        indexOfCurrentLowestNumber = indexOfSecondElement;

                    }
                }
            }

        }
        
    } else {
        throw new Error("The argument passed isn't valid. Please pass an array with only numbers");
    }
    
}

selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])