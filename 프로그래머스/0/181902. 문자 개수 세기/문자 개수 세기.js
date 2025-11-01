function solution(my_string) {
    const smallLetters = Array.from(
        {length: 26},
        (_, i) => String.fromCharCode(97 + i)
    );
    const capitalLetters = smallLetters.map(letter => letter.toUpperCase());
    const letters = capitalLetters.concat(smallLetters);
    return letters.map(letter => {
        const exist = Array.from(my_string).filter(ch => ch === letter);
        return exist ? exist.length : 0;
    });
}