function solution(ineq, eq, n, m) {
    const operators = {
        ">": (a, b) => n > m,
        "<": (a, b) => n < m,
        ">=": (a, b) => n >= m,
        "<=": (a, b) => n <= m,
    };
    
    const inequalitySign = eq === "=" ? `${ineq}=`: ineq;
    
    const answer = operators[inequalitySign](n, m) ? 1 : 0;
    return answer;
}