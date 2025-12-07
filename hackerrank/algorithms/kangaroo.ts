function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
  // calculate how many jump we need
  // x1 + (jumpneeds) * v1 = x2 + (jumpneeds) * v2
  // (jumpneeds) * v1 - (jumpneeds) * v2 = x2 - x1
  // (jumpneeds) * (v1 - v2) = x2 - x1
  // jumpneeds = (x2 - x1) / (v1 - v2)

  if (v1 <= v2) {
    return "NO";
  }

  const distance = x2 - x1;
  const speedDiff = v1 - v2;

  if (distance % speedDiff === 0) {
    return "YES";
  } else {
    return "NO";
  }
}

console.log(kangaroo(0, 3, 4, 2));
