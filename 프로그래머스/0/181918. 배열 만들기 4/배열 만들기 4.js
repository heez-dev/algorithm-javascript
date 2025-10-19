function solution(arr) {
    let result = [];
    
    for (let i = 0; i < arr.length;) {
        const condition = Boolean(result.length && result[result.length - 1] >= arr[i])
        if (condition) {
            result.pop();
        } else {
            result.push(arr[i]);
            i++;
        }
    }    
    
    return result;
}