function solution(intStrs, k, s, l) {
    return intStrs.reduce((acc, cur) => {
        const slice = Number(cur.slice(s, s + l));
        return slice > k ? [...acc, slice] : acc;
    }, [])
}