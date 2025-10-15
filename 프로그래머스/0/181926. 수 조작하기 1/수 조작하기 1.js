function solution(n, control) {
    const strArr = control.split('');
    const result = strArr.reduce((acc, cur) => {
        switch(cur) {
            case "w":
                return acc + 1;
            case "s":
                return acc - 1;
            case "d":
                return acc + 10;
            case "a":
                return acc - 10;
            default:
                return acc + 0;
        }
    }, n);
    return result;
}