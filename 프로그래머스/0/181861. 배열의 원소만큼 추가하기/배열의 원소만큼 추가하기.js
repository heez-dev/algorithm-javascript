function solution(arr) {
    return arr.reduce((acc, cur) => {
        const curArr = new Array(cur).fill(cur)
        return [...acc, ...curArr]
    }, []);
}