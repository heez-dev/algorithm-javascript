function solution(n) {
    const getCollatzSequence = (num, arr = [num]) => {       
        if (num === 1) return arr;
        
        const nextNum = num % 2 === 0 ? num / 2 : 3 * num + 1;
        arr.push(nextNum);
        
        return getCollatzSequence(nextNum, arr);
    }
    
    return getCollatzSequence(n);
}