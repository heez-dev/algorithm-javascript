function solution(code) {
  const chArr = code.split('');
  let mode = 0;
  let ret = '';

  chArr.forEach((ch, idx) => {
    if (ch === '1') {
      mode = mode === 0 ? 1 : 0;
      return; // 👈 이렇게만 쓰고 절대 mode 반환하지 않기
    }

    if (
      (mode === 0 && idx % 2 === 0) ||
      (mode === 1 && idx % 2 !== 0)
    ) {
      ret += ch;
    }
  });

  return ret || 'EMPTY';
}