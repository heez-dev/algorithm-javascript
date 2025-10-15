function solution(num_list) {
    const sum = (num_list.reduce((acc, cur) => acc + cur, 0)) ** 2;
    const multiple = num_list.reduce((acc, cur) => acc * cur, 1);
    return multiple < sum ? 1 : 0;
}