function solution(myString, pat) {
    const switchStr = myString.split('').map(ch => ch === "A" ? "B" : "A").join('')
    return switchStr.includes(pat) ? 1 : 0;
}