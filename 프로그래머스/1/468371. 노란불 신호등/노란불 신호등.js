function solution(signals) {
    let time = 1;
    
    while (time <= 10000000) {
        const allYellow = signals.every(([G, Y, R]) => {
            const cycle = G + Y + R;
            const pos = (time - 1) % cycle
            return pos >= G && pos < G + Y;
        })
        
        if (allYellow) return time;
        
        time++;
    }
    
    return -1;
}