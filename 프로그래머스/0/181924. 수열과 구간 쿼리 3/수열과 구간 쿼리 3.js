function solution(arr, queries) {
    queries.forEach(([a, b]) => {
        return [arr[a], arr[b]] = [arr[b], arr[a]];
    })
    return arr;
}