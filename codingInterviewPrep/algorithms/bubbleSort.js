/*
 * - Parameter: Array of numbers (unsorted).
 * - Mission: Sort the array from smallest to largest.
 *
 * Pre-conditions: Verify that the data being passed is valid (an array of numbers).
 * Post-conditions: Returns a perfectly sorted numeric array from smallest to largest.
 */

function bubbleSort(array) {
    let sortedArray = array;

    let everyElementIsANumber = sortedArray.every(element => typeof element === 'number' && Number.isFinite(element)); 

    if (Array.isArray(sortedArray) && sortedArray.length !== 0 && everyElementIsANumber) {
        
        let continueLoop = true;

        while (continueLoop) {
            let changes = 0;

            for (const [index, number] of sortedArray.entries()) {
                if (index === sortedArray.length - 1) {
                    if (changes === 0) {

                        continueLoop = false;

                        return sortedArray;
                    }
                } else {
                    if (number < sortedArray[index + 1] || number === sortedArray[index + 1]) {
                        continue
                    } else {
                        [sortedArray[index], sortedArray[index + 1]] = [sortedArray[index + 1], sortedArray[index]];
                        changes = 1;
                    }
                }
            }
        }

    } else {
        throw new Error("The argument passed isn't valid. Please pass an array with only numbers");
        
    }
    

}

bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])
