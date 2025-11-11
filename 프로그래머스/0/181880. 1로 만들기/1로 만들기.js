function solution(num_list) {
    let count = 0;
    
    num_list.forEach(n => {
        let current = n;
        while (current > 1) {
            const isEven = current % 2 === 0;
            if (isEven) {
                current = current / 2;
            } else {
                current = (current - 1) / 2;
            }
            count++;
        }
    })
    
    return count;
}