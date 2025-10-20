function solution(a, b, c, d) {
    const numCount = [a, b, c, d].reduce((acc, cur) => ({
        ...acc, 
        [cur]: acc[cur] + 1 || 1,
    }), {});
    
    const maxVal = Math.max(...Object.values(numCount))
    const getKey = (n) => Number(Object.keys(numCount).find(key => numCount[key] === Number(n)));
    
    switch (maxVal) {
        case 4: {
            const p = getKey(4);
            return 1111 * p;
        }
        case 3: {
            const p = getKey(3);
            const q = getKey(1);
            return (10 * p + q) ** 2;
        }
        case 2: {
            const keys = Object.keys(numCount)
            if (keys.length === 2) {
                const p = Number(keys[0]);
                const q = Number(keys[1]);
                return (p + q) * Math.abs(p - q)
            } else {
                const p = getKey(2);
                const [strQ, strR] = keys.filter(key => Number(key) !== p);
                const q = Number(strQ);
                const r = Number(strR)
                return q * r;
            }
        }
        case 1:
            return Math.min(a, b, c, d);
        default: 
            return;
    }
}