function solution(number) {
    const numArr = String(number).split('')
    const sum = numArr.reduce((acc, cur) => acc + Number(cur), 0)
    const rest = sum % 9
    return rest;
}