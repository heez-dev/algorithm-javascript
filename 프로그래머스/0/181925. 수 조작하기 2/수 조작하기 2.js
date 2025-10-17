function solution(numLog) {
    const answer = numLog.map((n,i) => {
        const prev = numLog[i - 1];
        switch(n - prev) {
            case 1:
                return 'w';
            case -1:
                return 's';
            case 10:
                return 'd';
            case -10:
                return 'a';
            default:
                return '';
        }
    }).join('');
    return answer;
}