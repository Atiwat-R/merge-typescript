// tests/merge.test.ts

import merge from '../src/merge';

test('Basic array merging, 3x3x3', () => {
    const collection1 = [1, 3, 5];
    const collection2 = [6, 4, 2];
    const collection3 = [7, 8, 9];
    const merged = merge(collection1, collection2, collection3);
    expect(merged).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('Merging larger collections, 7x7x7', () => {
    const collection1 = [1, 3, 5, 10, 15, 20, 25];
    const collection2 = [100, 50, 30, 20, 15, 10, 5];
    const collection3 = [2, 4, 6, 8, 10, 12, 14];
    const merged = merge(collection1, collection2, collection3);
    expect(merged).toEqual([1, 2, 3, 4, 5, 5, 6, 8, 10, 10, 10, 12, 14, 15, 15, 20, 20, 25, 30, 50, 100]);
});

test('Merging collections of different lengths, 5x4x3', () => {
    const collection1 = [1, 3, 5, 10, 11];
    const collection2 = [6, 4, 2, 0];
    const collection3 = [7, 8, 9];
    const merged = merge(collection1, collection2, collection3);
    expect(merged).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
});

test('Merging larger collections of different lengths, 14x6x21', () => {
    const collection1 = [23, 85, 173, 287, 299, 311, 345, 402, 420, 430, 470, 510, 525, 598];
    const collection2 = [550, 512, 489, 450, 430, 405];
    const collection3 = [28, 67, 109, 173, 253, 268, 296, 372, 417, 489, 501, 517, 567, 592, 634, 692, 741, 814, 848, 909, 993];
    const merged = merge(collection1, collection2, collection3);
    expect(merged).toEqual(
    [
        23,  28,  67,  85, 109, 173, 173, 253,
       268, 287, 296, 299, 311, 345, 372, 402,
       405, 417, 420, 430, 430, 450, 470, 489,
       489, 501, 510, 512, 517, 525, 550, 567,
       592, 598, 634, 692, 741, 814, 848, 909,
       993
    ]);
});

test('Merging collections of different lengths, 5x4x3', () => {
    const collection1 = [1, 3, 5, 10, 11];
    const collection2 = [6, 4, 2, 0];
    const collection3 = [7, 8, 9];
    const merged = merge(collection1, collection2, collection3);
    expect(merged).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
});

test('Merging empty collections, 0x0x0', () => {
    const collection1: number[] = [];
    const collection2: number[] = [];
    const collection3: number[] = [];
    const merged = merge(collection1, collection2, collection3);
    expect(merged).toEqual([]);
});

test('Merging filled and empty collections, 5x0x0', () => {
    const collection1: number[] = [5, 10, 15, 20, 25];
    const collection2: number[] = [];
    const collection3: number[] = [];
    const merged = merge(collection1, collection2, collection3);
    expect(merged).toEqual([5, 10, 15, 20, 25]);
});

test('Merging filled and empty collections, 6x8x0', () => {
    const collection1: number[] = [4287, 5769, 6831, 7304, 7491, 8499];
    const collection2: number[] = [5925, 5303, 5004, 4498, 3930, 3411, 2564, 2096];
    const collection3: number[] = [];
    const merged = merge(collection1, collection2, collection3);
    expect(merged).toEqual(
    [
        2096, 2564, 3411,
        3930, 4287, 4498,
        5004, 5303, 5769,
        5925, 6831, 7304,
        7491, 8499
    ]);
});

test('Merging collections with negative numbers, 8x8x8', () => {
    const collection1 = [1, 3, 5, 10, 11, 14, 18, 20];
    const collection2 = [6, 4, 2, 0, -1, -4, -8, -10];
    const collection3 = [7, 8, 9, 12, 15, 17, 22, 25];
    const merged = merge(collection1, collection2, collection3);
    expect(merged).toEqual([-10, -8, -4, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 17, 18, 20, 22, 25]);
});

test('Merging large collections with wide range of numbers, 20x20x20', () => {
    const collection1: number[] = [-9732, -8443, -8058, -7336, -7219, -5915, -4539, -3435, -2307, -2162, -1476, 2431, 3015, 4125, 5289, 7022, 7846, 8268, 8422, 9517];
    const collection2: number[] = [9985, 9906, 9784, 9625, 9511, 9392, 9362, 9273, 9076, 8882, 8256, 8121, 8027, 7523, 6625, 6358, 6201, 5567, 4293, 3186];
    const collection3: number[] = [-9936, -8158, -7899, -7473, -7364, -6193, -5475, -5253, -4982, -4861, -4705, -4405, -3433, -1847, -1235, -849, -272, -181, -29, 8626];
    const merged = merge(collection1, collection2, collection3);
    expect(merged).toEqual(
    [
        -9936, -9732, -8443, -8158, -8058, -7899, -7473,
        -7364, -7336, -7219, -6193, -5915, -5475, -5253,
        -4982, -4861, -4705, -4539, -4405, -3435, -3433,
        -2307, -2162, -1847, -1476, -1235,  -849,  -272,
         -181,   -29,  2431,  3015,  3186,  4125,  4293,
         5289,  5567,  6201,  6358,  6625,  7022,  7523,
         7846,  8027,  8121,  8256,  8268,  8422,  8626,
         8882,  9076,  9273,  9362,  9392,  9511,  9517,
         9625,  9784,  9906,  9985
    ]);
});