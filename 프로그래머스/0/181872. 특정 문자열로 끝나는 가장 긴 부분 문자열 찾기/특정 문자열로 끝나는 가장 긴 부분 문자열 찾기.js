function solution(myString, pat) {
    const sliceIdx = myString.lastIndexOf(pat)
    return myString.slice(0, sliceIdx + pat.length);
}