function solution(arr, queries) {
    const answer = queries.reduce((acc, [s, e, k], i) => {
        const filteredArr = arr.filter((n, j) => s <= j && e >= j && n > k);
        const result = filteredArr.length ? Math.min.apply(null, filteredArr) : -1
        return [...acc, result];
    }, []);
    return answer;
}