function solution(my_string, k) {
    const strArr = new Array(k).fill(my_string)
    var answer = strArr.join('');
    return answer;
}