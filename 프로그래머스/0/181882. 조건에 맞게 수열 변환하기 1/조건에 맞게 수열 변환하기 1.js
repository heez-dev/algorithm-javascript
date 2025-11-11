function solution(arr) {
    return arr.map(n => {
        const isEven = n % 2 === 0; 
        if (n >= 50 && isEven) return n / 2;
        if (n < 50 && !isEven) return n * 2;
        return n;
    });
}