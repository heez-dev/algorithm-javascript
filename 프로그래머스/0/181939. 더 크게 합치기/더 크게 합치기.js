function solution(a, b) {
    const strA = String(a);
    const strB = String(b);
    var answer = Math.max(strA + strB, strB + strA);
    return answer;
}