function solution(my_strings, parts) {
    return parts.reduce((acc, [s, e], i) => {
        const slice = my_strings[i].slice(s, e + 1);
        return acc + slice;
    }, "")
}