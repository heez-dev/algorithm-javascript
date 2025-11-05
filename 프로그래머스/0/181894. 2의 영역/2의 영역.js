function solution(arr) {
    const startIdx = arr.indexOf(2);
    const endIdx = arr.lastIndexOf(2);
    
    if (startIdx < 0) return [-1];
    
    if (startIdx === endIdx) return [arr[startIdx]];
    
    return arr.slice(startIdx, endIdx + 1);
}