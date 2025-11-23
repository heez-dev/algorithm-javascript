function solution(arr, k) {
    const deleteDuplicated = [...new Set(arr)];
    
    if (deleteDuplicated.length > k) {
        return deleteDuplicated.slice(0, k); 
    }
    
    if (deleteDuplicated.length < k) {
        return Array(k).fill(k).map((v, i) => deleteDuplicated[i] ?? -1);
    }
    
    return deleteDuplicated;
}