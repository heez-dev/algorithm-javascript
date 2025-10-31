function solution(my_string, m, c) {
    const iterableCount = Math.ceil(my_string.length / m);
    const slicedArr = Array(iterableCount).fill().map((_, i) => my_string.slice(i * m, i * m + m));
    return slicedArr.map(sliced => sliced[c - 1]).join('');
}