


// Merge 3 arrays into one
// collection1 & collection3 are sorted min -> max
// collection2 is sorted max -> min
const merge = (collection1: number[], collection2: number[], collection3: number[]): number[] => {
    
    const mergedArray: number[] = []
    var index1 = 0
    var index2 = collection2.length - 1
    var index3 = 0

    while (index1 < collection1.length || index2 >= 0 || index3 < collection3.length) {
        // From index pointers, obtain 3 min value from each array and find a minimum among them
        const min = Math.min(
            index1 < collection1.length ? collection1[index1] : Infinity, // Once they've reached the end of array, their value would be Infinity, thus excluding them from being chosen
            index2 >= 0 ? collection2[index2] : Infinity,
            index3 < collection3.length ? collection3[index3] : Infinity,
        )

        // Finds the minimum across 3 arrays, add it to mergedArray
        mergedArray.push(min)

        // Move the pointer in the array the min was found to obtain the next least value
        switch(min) {
            case collection1[index1]:
                index1 += 1
                break
            case collection2[index2]:
                index2 -= 1
                break
            case collection3[index3]:
                index3 += 1
                break
        }
    }

    return mergedArray
}


// const result = merge([1, 2, 3], [6, 5, 2], [7, 8, 9]);
// console.log(result);

// console.log(merge(collection1, collection2, collection3))

export default merge 