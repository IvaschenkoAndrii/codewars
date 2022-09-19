function peakAndValley(arr) {
   return  arr.filter((v, i, a) => (a[i] < a[i - 1] && a[i] < a[i - 2] && a[i] <
        a[i - 3] && a[i] < a[i + 1] && a[i] < a[i + 2] && a[i] < a[i + 3]) ||
       (a[i] > a[i - 1] && a[i] > a[i - 2] && a[i] > a[i - 3] && a[i] > a[i + 1] && a[i] > a[i + 2] && a[i] > a[i + 3]));


}

a = [1, 2, 3, 4, 5, 4, 3, 2, 6, 7, 8, 7, 6, 5];
console.log(peakAndValley(a));