// Exercise:

// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

// You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.

// For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

// Index	0	1	2	3	4
// Value	7	9	11	13	15
// Below we'll take their corresponding indices and add them.

// 7 + 13 = 20 → Indices 0 + 3 = 3
// 9 + 11 = 20 → Indices 1 + 2 = 3
// 3 + 3 = 6 → Return 6

function permAlone(str) {
    // Split the input string into an array of characters to work with indices
    const chars = str.split('');
    const n = chars.length;
    if (n === 0) return 0; // Edge case: empty string has no valid permutations

    // Stores all unique permutations of indices (avoids character duplication issues)
    const indexPerms = [];

    // Recursive function to generate permutations of indices using backtracking
    const generate = (arr, start = 0) => {
        // Base case: when a full permutation is generated (reached the end of the array)
        if (start === n) {
            indexPerms.push([...arr]); // Save a copy of the current permutation
            return;
        }

        // Generate permutations by swapping elements starting from 'start'
        for (let i = start; i < n; i++) {
            // Swap elements at positions 'start' and 'i'
            [arr[start], arr[i]] = [arr[i], arr[start]];
            // Recursively generate permutations for the next position (start + 1)
            generate(arr, start + 1);
            // Backtrack: undo the swap to restore the array for the next iteration
            [arr[start], arr[i]] = [arr[i], arr[start]];
        }
    };

    // Initialize the permutation array with indices [0, 1, 2, ..., n-1] and generate permutations
    generate(Array.from({ length: n }, (_, i) => i));

    let count = 0; // Counts valid permutations without consecutive duplicates

    // Check each permutation of indices for consecutive duplicate characters
    for (const perm of indexPerms) {
        let hasConsecutive = false;
        // Compare adjacent characters in the permutation using their indices
        for (let i = 0; i < perm.length - 1; i++) {
            // If two consecutive characters are the same, mark as invalid
            if (chars[perm[i]] === chars[perm[i + 1]]) {
                hasConsecutive = true;
                break; // Exit early if duplicates are found
            }
        }
        // If no consecutive duplicates, increment the valid permutation count
        if (!hasConsecutive) {
            count++;
        }
    }

    return count; // Return the total valid permutations
}