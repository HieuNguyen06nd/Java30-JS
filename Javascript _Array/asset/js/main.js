// Bài 1: Viết function nhận vào 1 mảng số và một số X để trả ra số nguyên tố trong mảng gần với giá trị X nhất.
const isPrime = n => {
  if (n < 2) return false;
  for (let i = 2, sqrt = Math.sqrt(n); i <= sqrt; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const closestPrime = (arr, x) => {
  const primes = arr.filter(isPrime);
  return primes.length === 0
    ? null
    : primes.reduce((a, b) =>
        Math.abs(a - x) < Math.abs(b - x) ? a : b
      );
};

console.log("Bài 1:", closestPrime([10, 7, 15, 2, 9], 8));

// Bài 2: Viết chương trình liệt kê các số nguyên có từ 5 đến 7 chữ số thoả mãn tất cả các điều kiện sau:
// a) Là số nguyên tố.
// b) Là số thuận nghịch.
// c) Không chứa chữ số 4
const isPalindrome = n => {
  const s = String(n);
  return s === [...s].reverse().join('');
};

const hasDigit4 = n => String(n).includes('4');

const listSpecialNumbers = () => {
  const result = [];
  for (let i = 10000; i <= 9999999; i++) {
    const len = String(i).length;
    if (len >= 5 && len <= 7 && isPrime(i) && isPalindrome(i) && !hasDigit4(i)) {
      result.push(i);
    }
  }
  return result;
};

console.log("Bài 2:", listSpecialNumbers().slice(0, 5));

// Bài 3: Viết chương trình liệt kê các số nguyên có 7 chữ số thoả mãn cả 3 điều kiện sau:
// a) Là số nguyên tố.
// b) Tất cả các chữ số là nguyên tố
// c) Đảo của nó cũng là một số nguyên tố
const allDigitsArePrime = n => {
  const primeDigits = new Set(['2', '3', '5', '7']);
  return [...String(n)].every(d => primeDigits.has(d));
};

const reverseNumber = n => Number([...String(n)].reverse().join(''));

const listSevenDigitSpecialPrimes = () => {
  const result = [];
  for (let i = 1000000; i <= 9999999; i++) {
    if (isPrime(i) && allDigitsArePrime(i) && isPrime(reverseNumber(i))) {
      result.push(i);
    }
  }
  return result;
};

console.log("Bài 3:", listSevenDigitSpecialPrimes().slice(0, 5));

// Bài 4: Viết function nhận vào 1 mảng số. Tìm số lớn thứ hai và vị trí của nó trong dãy. Chú ý trường hợp cả dãy bằng nhau thì sẽ không có số lớn thứ 2.

const secondLargest = arr => {
  const unique = [...new Set(arr)];
  if (unique.length < 2) return null;

  unique.sort((a, b) => b - a);
  const second = unique[1];

  const positions = arr
    .map((val, idx) => (val === second ? idx : -1))
    .filter(idx => idx !== -1);

  return { value: second, positions };
};

console.log("Bài 4:", secondLargest([9, 2, 4, 9, 5, 5]));

// ✅ Bài 5: Số chính phương trong đoạn [m,n]
const listPerfectSquares = (m, n) => {
  const result = [];
  for (let i = Math.ceil(Math.sqrt(m)); i <= Math.floor(Math.sqrt(n)); i++) {
    result.push(i * i);
  }
  return result;
};

console.log("Bài 5:", listPerfectSquares(1, 100));

// ✅ Bài 6: Kiểm tra 2 số nguyên tố cùng nhau
const gcd = (a, b) => {
  while (b !== 0) [a, b] = [b, a % b];
  return a;
};

const isCoprime = (a, b) => gcd(a, b) === 1;

console.log("Bài 6:", isCoprime(14, 15)); 

// ✅ Bài 7: Kiểm tra số nguyên tố
const isPrimeNumber = isPrime;

console.log("Bài 7:", isPrimeNumber(19)); // expect: true
console.log("Bài 7:", isPrimeNumber(20)); // expect: false
