function solution(arr, queries) {
    return queries.reduce((acc, cur) => {
        const [s, e] = cur;
        
        return acc.map((n, i) => s <= i && i <= e ? n + 1 : n);
    }, arr);
}