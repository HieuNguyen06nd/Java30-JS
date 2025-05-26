// cau 1

function isPrime(n) {
  if (n < 2) return false;
  for (var i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function abs(a) {
  return a < 0 ? -a : a;
}

function findNearestPrime(arr, x) {
  var closest = null;
  var minDiff = 999999999;

  for (var i = 0; i < arr.length; i++) {
    var so = arr[i];
    if (isPrime(so)) {
      var diff = abs(so - x);
      if (diff < minDiff) {
        minDiff = diff;
        closest = so;
      }
    }
  }
  return closest;
}
// cau 2
function isPalindrome(n) {
  var reversed = 0;
  var original = n;
  while (n > 0) {
    var digit = n % 10;
    reversed = reversed * 10 + digit;
    n = (n - digit) / 10;
  }
  return reversed === original;
}

function notContainDigit4(n) {
  while (n > 0) {
    var digit = n % 10;
    if (digit === 4) return false;
    n = (n - digit) / 10;
  }
  return true;
}

function countDigits(n) {
  var count = 0;
  while (n > 0) {
    count++;
    n = (n - n % 10) / 10;
  }
  return count;
}

function listSpecialNumbers() {
  for (var i = 10000; i <= 9999999; i++) {
    var len = countDigits(i);
    if (len >= 5 && len <= 7 && isPrime(i) && isPalindrome(i) && notContainDigit4(i)) {
      console.log(i);
    }
  }
}

// cau 3
function allDigitsArePrime(n) {
  while (n > 0) {
    var digit = n % 10;
    if (!isPrime(digit)) return false;
    n = (n - digit) / 10;
  }
  return true;
}

function reverseNumber(n) {
  var reversed = 0;
  while (n > 0) {
    var d = n % 10;
    reversed = reversed * 10 + d;
    n = (n - d) / 10;
  }
  return reversed;
}

function listValidSevenDigitNumbers() {
  for (var i = 1000000; i <= 9999999; i++) {
    if (isPrime(i) && allDigitsArePrime(i) && isPrime(reverseNumber(i))) {
      console.log(i);
    }
  }
}

// cau 4
function findSecondLargest(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }

  var second = -9999999;
  var found = false;
  for (var j = 0; j < arr.length; j++) {
    if (arr[j] !== max && arr[j] > second) {
      second = arr[j];
      found = true;
    }
  }

  if (!found) return "Không có số lớn thứ hai";

  var positions = [];
  for (var k = 0; k < arr.length; k++) {
    if (arr[k] === second) positions.push(k);
  }

  return { value: second, positions: positions };
}

// cau 5
function isPerfectSquare(x) {
  for (var i = 1; i * i <= x; i++) {
    if (i * i === x) return true;
  }
  return false;
}

function listPerfectSquares(m, n) {
  var count = 0;
  for (var i = m; i <= n; i++) {
    if (isPerfectSquare(i)) {
      console.log(i);
      count++;
    }
  }
  console.log("Tổng số chính phương:", count);
}


// cau 6
function gcd(a, b) {
  var temp;
  while (b !== 0) {
    temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function isCoprime(m, n) {
  return gcd(m, n) === 1;
}

// cau 7
