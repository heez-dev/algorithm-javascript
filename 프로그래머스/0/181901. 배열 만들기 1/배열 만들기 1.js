function solution(n, k) {
    const numArr = Array.from({length: n}).map((_, i) => i + 1);
    return numArr.reduce((acc, cur) => {
        return cur % k === 0 ? [...acc, cur] : acc
    }, []);
}