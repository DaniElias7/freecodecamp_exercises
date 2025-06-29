function pairwise(arr, arg) {
    
    let indexesSum = 0;

    for (let firstNumberIndex = 0; firstNumberIndex < arr.length; firstNumberIndex++) {

        for (let secondNumberIndex = firstNumberIndex + 1; secondNumberIndex < arr.length; secondNumberIndex++) {

            const sum = firstNumberIndex + secondNumberIndex;

            if (sum === arg) {
                indexesSum += sum;
            }
        }
    }

    return indexesSum;
}

console.log( pairwise([1, 1, 1], 2) );
console.log( pairwise([0, 0, 0, 0, 1, 1], 1) );