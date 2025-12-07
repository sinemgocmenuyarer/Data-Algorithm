function isPalindrome(s: string): boolean {
  // O(n) time complexity and O(n) space complexity
  let sArr = s.toLowerCase().split("");

  let newString = "";

  for (let i = 0; i < sArr.length; i++) {
    if (
      (sArr[i] >= "a" && sArr[i] <= "z") ||
      (sArr[i] >= "0" && sArr[i] <= "9")
    ) {
      newString = newString + sArr[i];
    }
  }

  let reverseString = newString.split("").reverse().join("");

  if (reverseString == newString) {
    return true;
  } else {
    return false;
  }
}

function isPalindrome2(s: string): boolean {
  // O(n) time complexity and O(1) space complexity
  // First and Last and rest should be same
  // g: global in regex. It means not only first match but all matches replace
  // i: case insensitive in regex

  s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");

  for (let i = 0, y = s.length - 1; i < y; i++, y--) {
    if (s.charAt(i) !== s.charAt(y)) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome2("A man, a plan, a canal: Panama"));
