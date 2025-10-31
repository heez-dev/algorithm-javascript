function reverseStr(str) {
    return str.split('').reverse().join('');
}

function solution(my_string, s, e) {
    const slice = my_string.slice(s, e + 1)
    const strArr = Array.from(my_string);
    strArr.splice(s, e - s + 1, reverseStr(slice));
    return strArr.join('');
}