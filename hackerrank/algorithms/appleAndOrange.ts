function countApplesAndOranges(
  s: number,
  t: number,
  a: number,
  b: number,
  apples: number[],
  oranges: number[]
): void {
  const distanceFromAppleTree = apples.map((distance) => distance + a);
  const distanceFromOrangeTree = oranges.map((distance) => distance + b);

  const applesWithinRange = distanceFromAppleTree.filter(
    (distance) => distance >= s && distance <= t
  );
  const orangesWithinRange = distanceFromOrangeTree.filter(
    (distance) => distance >= s && distance <= t
  );

  console.log("apples:", applesWithinRange.length);
  console.log("oranges:", orangesWithinRange.length);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
