function solution(x1, x2, x3, x4) {
    const or = (x, y) => Boolean(x || y);
    const and = (x, y) => Boolean(x && y);

    return and(or(x1, x2), or(x3, x4));
}