function solution(num_list) {
    const parsing = (arr) => {
        return arr.map(n => {
            const isEven = n % 2 === 0;
            if (n >= 50 && isEven) return n / 2;
            if (n < 50 && !isEven) return n * 2 + 1;
            return n;
        })
    };
    
    let x = 0;
    let current = num_list;
    
    while (true) {
        const next = parsing(current);
        if (next.every((n, i) => n === current[i])) break;
        current = next;
        x++;
    }
    
    return x;
}