function solution(a, b, c) {
    const calcPower = (n) => a ** n + b ** n + c ** n;
    
    if (a === b && b === c ) {
        return calcPower(1) * calcPower(2) * calcPower(3);
    }
    
    if ( a !== b && b !== c && a !== c) {
        return a + b + c;
    }
    
    return calcPower(1) * calcPower(2);
}