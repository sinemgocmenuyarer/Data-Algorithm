var merge = function (nums1: number[], m: number, nums2: number[], n: number) {
  // Use the GIVENS such as m or n
  // Loop these as long as there are elements in NUMS2 meaning y >= 0

  let k = m + n - 1;
  let y = n - 1;

  for (let i = m - 1; y >= 0; k--) {
    if (nums1[i] > nums2[y]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[y];
      y--;
    }
  }
};
