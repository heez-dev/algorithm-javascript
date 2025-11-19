function solution(myStr) {
    const parsed = myStr
        .split('a')
        .flatMap(ch => ch.split('b'))
        .flatMap(ch => ch.split('c'))
        .filter(ch => ch !== '')
    return parsed.length ? parsed : ['EMPTY'];
}