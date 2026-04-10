function solution(strArr) {
    const grouped = strArr.reduce((acc,cur) => {
        const key = cur.length
        const value = acc[key]
        acc[key] = value === undefined ? 1 : value + 1
        return acc
    }, {});
    
    return Math.max(...Object.values(grouped));
}