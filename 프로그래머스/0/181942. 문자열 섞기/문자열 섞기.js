function solution(str1, str2) {
    var answer = str1.split('').map((ch, idx) => ch + str2[idx]).join('');
    return answer;
}