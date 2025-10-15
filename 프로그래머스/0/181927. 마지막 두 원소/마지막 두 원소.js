function solution(num_list) {
    const last = num_list.at(-1);
    const prev = num_list.at(-2);
    
    return last > prev 
        ? [...num_list, last - prev]
        : [...num_list, last * 2];
}