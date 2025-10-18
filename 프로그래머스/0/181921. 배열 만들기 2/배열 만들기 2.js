function solution(l, r) {
    const numArr = [...Array(r - l + 1).keys()].reduce((acc, cur) => {
        const num = cur + l;
        if (num % 5 !== 0) return acc
        const strArr = String(num).split('');
        const condition = strArr.every(ch => ch === String(5) || ch === String(0));
        return condition ? [...acc, num] : acc
    }, [])
    return numArr.length ? numArr : [-1];
}