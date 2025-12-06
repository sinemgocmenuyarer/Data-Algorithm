let example: number[] = [1, 2, 3];
let example2: number[] = [1, 2, 3, 4, 5];

let exampleOutput: number[] = [3, 2, 1];
let exampleOutput2: number[] = [5, 4, 3, 2, 1];

function reverseArray(a: number[]): number[] {
  // Solution 1
  // O(n) space complexity and O(n) time complexity
  let newArr = [];
  for (let i = a.length - 1; i >= 0; i--) {
    newArr.push(a[i]);
  }

  return newArr;
}

function reverseArray2(a: number[]): number[] {
  // Solution 2
  // O(1) space complexity and O(n) time complexity
  for (let i = 0; i < Math.floor(a.length / 2); i++) {
    const j = a.length - 1 - i;

    const temp = a[i];

    a[i] = a[j];
    a[j] = temp;
  }

  return a;
}

function reverseArray3(a: number[]): number[] {
  // Solution 3
  // Built in
  return a.reverse();
}

console.log(reverseArray(example));
console.log(reverseArray2(example));
console.log(reverseArray3(example));
