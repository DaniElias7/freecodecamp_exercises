function quickSort(arr, lowIndex = 0, highIndex = arr.length - 1) {
    
    if (lowIndex >= highIndex) return arr;

    const randomIndex = Math.floor(Math.random() * (highIndex - lowIndex + 1)) + lowIndex;

    [arr[randomIndex], arr[highIndex]] = [arr[highIndex], arr[randomIndex]];

    const pivotValue = arr[highIndex];

    let partitionIndex = lowIndex;

    for (let i = lowIndex; i < highIndex; i++) {

        if (arr[i] <= pivotValue) {

            [arr[partitionIndex], arr[i]] = [arr[i], arr[partitionIndex]];

            partitionIndex++;
        }

    }

    [arr[partitionIndex], arr[highIndex]] = [arr[highIndex], arr[partitionIndex]];

    quickSort(arr, lowIndex, partitionIndex - 1);

    quickSort(arr, partitionIndex + 1, highIndex);
    
    return arr;
}