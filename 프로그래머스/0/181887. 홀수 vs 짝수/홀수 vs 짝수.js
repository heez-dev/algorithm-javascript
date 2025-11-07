function solution(num_list) {
    const sum = num_list.reduce((acc, cur, i) => {
        console.log(acc)
        return i % 2 === 0
            ? {...acc, even: acc.even + cur}
            : {...acc, odd: acc.odd + cur}
    }, { even: 0, odd: 0})
    return Math.max(sum.even, sum.odd);
}