function solution(num_list) {
    const length = num_list.length;
    
    if (!length) return;
    
    return length >= 11
        ? num_list.reduce((acc, cur) => acc + cur, 0)
        : num_list.reduce((acc, cur) => acc * cur, 1);
}