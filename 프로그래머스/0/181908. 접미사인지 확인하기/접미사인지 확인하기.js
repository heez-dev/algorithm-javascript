function solution(my_string, is_suffix) {
    const suffixList = Array.from(my_string).map((_, idx) => my_string.slice(idx)).sort();
    return suffixList.includes(is_suffix) ? 1 : 0;
}