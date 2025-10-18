function solution(start_num, end_num) {
    return [...Array(end_num - start_num + 1).keys()].map(n => n + start_num);
}