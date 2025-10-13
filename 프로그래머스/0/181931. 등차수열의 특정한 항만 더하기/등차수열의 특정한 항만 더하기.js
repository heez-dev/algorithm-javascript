function solution(a, d, included) {
    const answer = included.reduce((acc, cur, idx) => {
        return cur ? acc + a + (d * idx) : acc
    }, 0);
    return answer;
}