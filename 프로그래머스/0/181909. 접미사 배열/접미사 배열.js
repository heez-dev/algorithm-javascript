function solution(my_string) {
    return Array.from(my_string).map((_, idx) => my_string.slice(-idx)).sort();
}