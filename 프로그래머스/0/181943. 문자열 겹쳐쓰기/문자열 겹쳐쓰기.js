function solution(my_string, overwrite_string, s) {
    const myStr = my_string.slice(0,s)
    const rest = my_string.slice(s + overwrite_string.length)
    const result = myStr + overwrite_string
    
    if (rest) {
        return result + rest
    } else {
        return result
    }
}