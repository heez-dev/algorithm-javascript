function solution(n) {
    const numArr = [...Array(n)].map((v, i) => i + 1);
    if (n % 2 === 0) {
        const evenArr = numArr.filter(v => v % 2 === 0);
        const result = evenArr.reduce((acc, cur) => acc + cur * cur, 0);
        return result;
    } else {
        const oddArr = numArr.filter(v => v % 2 === 1);
        const result = oddArr.reduce((acc, cur) => acc + cur, 0);
        return result;
    }
}