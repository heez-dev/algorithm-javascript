function solution(arr) {
    const stk = arr.reduce((stk, num, i) => {
        if (!stk.length) return [num];
        
        const last = stk[stk.length - 1];
        
        if (last === num) {
            stk.pop();
        } else {
            stk.push(num);
        }
        
        return stk;
    }, [])
    
    return stk.length ? stk : [-1];
}