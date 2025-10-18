function solution(arr, queries) {
    return queries.reduce((acc, [s, e, k]) => {
        return acc.map((n, j) => s <= j && e >= j && j % k === 0 ? acc[j] + 1 : acc[j])
    }, arr)
}