function solution(arr) {
    let len = arr.length;
    let pow = 1;

    while (pow < len) {
        pow *= 2;
    }

    while (arr.length < pow) {
        arr.push(0);
    }

    return arr;
}