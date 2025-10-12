function solution(a, b) {
    const ab = Number(String(a) + String(b));
    const multiply = 2 * a * b;
    var answer = Math.max(ab, multiply);
    return answer;
}