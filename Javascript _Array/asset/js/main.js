// Bài 1: Viết function nhận vào 1 mảng số và một số X để trả ra số nguyên tố trong mảng gần với giá trị X nhất.

const isPrime = n => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const closestPrime = (arr, x) => {
  const primes = arr.filter(isPrime);
  if (primes.length === 0) return null;
  return primes.reduce((a, b) => Math.abs(a - x) < Math.abs(b - x) ? a : b);
};

// Bài 2: Viết chương trình liệt kê các số nguyên có từ 5 đến 7 chữ số thoả mãn tất cả các điều kiện sau:
// a) Là số nguyên tố.
// b) Là số thuận nghịch.
// c) Không chứa chữ số 4

const isPalindrome = n => {
  const s = n.toString();
  return s === s.split('').reverse().join('');
};

const hasDigit4 = n => n.toString().includes('4');

const listSpecialNumbers = () => {
  const result = [];
  for (let i = 10000; i <= 9999999; i++) {
    const len = i.toString().length;
    if ((len === 5 || len === 6 || len === 7) && isPrime(i) && isPalindrome(i) && !hasDigit4(i)) {
      result.push(i);
    }
  }
  return result;
};


// Bài 3: Viết chương trình liệt kê các số nguyên có 7 chữ số thoả mãn cả 3 điều kiện sau:
// a) Là số nguyên tố.
// b) Tất cả các chữ số là nguyên tố
// c) Đảo của nó cũng là một số nguyên tố

const allDigitsPrime = n => {
  const primeDigits = new Set(['2', '3', '5', '7']);
  return n.toString().split('').every(d => primeDigits.has(d));
};

const reverseNumber = n => parseInt(n.toString().split('').reverse().join(''));

const listSevenDigitPrimes = () => {
  const result = [];
  for (let i = 1000000; i <= 9999999; i++) {
    if (isPrime(i) && allDigitsPrime(i)) {
      const reversed = reverseNumber(i);
      if (isPrime(reversed)) {
        result.push(i);
      }
    }
  }
  return result;
};


// Bài 4: Viết function nhận vào 1 mảng số. Tìm số lớn thứ hai và vị trí của nó trong dãy. Chú ý trường hợp cả dãy bằng nhau thì sẽ không có số lớn thứ 2.

const secondLargest = arr => {
  const unique = [...new Set(arr)];
  if (unique.length < 2) return null;

  unique.sort((a, b) => b - a);
  const second = unique[1];

  const indices = arr.reduce((acc, val, idx) => {
    if (val === second) acc.push(idx);
    return acc;
  }, []);

  return { value: second, positions: indices };
};


// Bài 5: Viết function nhận vào 2 số tự nhiên m và n, sao cho m < n. Hãy liệt kê các số chính phương trong đoạn [m,n]. Có bao nhiêu số chính phương? (Nhớ lại kiến thức về đoạn số được học ở lớp 10, một số x thuộc đoạn [m, n] có nghĩa là m <= x <= n)
const listPerfectSquares = (m, n) => {
  const result = [];
  for (let i = Math.ceil(Math.sqrt(m)); i <= Math.floor(Math.sqrt(n)); i++) {
    result.push(i * i);
  }
  return result;
};

// Bài 6: Viết function nhận vào 2 số tự nhiên m và n rồi kiểm tra xem chúng có nguyên tố cùng nhau không. (Hai số nguyên tố cùng nhau là 2 số có ước chung lớn nhất là 1)
const gcd = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

const isCoprime = (a, b) => gcd(a, b) === 1;

// Bài 7: Viết function nhận vào số n và kiểm tra n có phải số nguyên tố hay không.
const isPrimeNumber = n => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};
