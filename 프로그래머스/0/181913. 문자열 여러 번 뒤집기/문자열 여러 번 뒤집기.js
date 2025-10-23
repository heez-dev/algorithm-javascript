function solution(my_string, queries) {
    return answer = queries.reduce((acc, [s, e]) => {
        const slice = acc.slice(s, e + 1).reverse()
        acc.splice(s, e - s + 1, ...slice)
        return acc
    }, my_string.split('')).join('');
}