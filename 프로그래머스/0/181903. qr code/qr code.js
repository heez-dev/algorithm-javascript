function solution(q, r, code) {
    return Array.from(code).map((ch, i) => i % q === r ? ch : '').join('');
}