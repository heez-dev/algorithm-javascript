function solution(start_num, end_num) {
    return Array
        .from({length: start_num - end_num + 1})
        .fill(start_num)
        .map((num, i) => num - i);
}