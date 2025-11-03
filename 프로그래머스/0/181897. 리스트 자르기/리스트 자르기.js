function solution(n, slicer, nums) {
  const [a, b, c] = slicer;
  switch (n) {
    case 1:
      return nums.slice(0, b + 1);
    case 2:
      return nums.slice(a);
    case 3:
      return nums.slice(a, b + 1);
    case 4:
      return nums.slice(a, b + 1).filter((_, i) => i % c === 0);
    default:
      return [];
  }
}