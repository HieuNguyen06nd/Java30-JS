// Bài 1: Tìm các chuỗi có độ dài lớn nhất

function getStringHasMaxLength(arr) {
  const maxLength = Math.max(...arr.map(str => str.length));
  return arr.filter(str => str.length === maxLength);
}

console.log(getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']));


// Bài 2. Cho mảng users như sau:

const users = [
  { name: "Bùi Công Sơn", age: 30, isStatus: true },
  { name: "Nguyễn Thu Hằng", age: 27, isStatus: false },
  { name: "Phạm Văn Dũng", age: 20, isStatus: false }
];

// Lọc theo age > 25 và isStatus = true
function getActiveUsersOver25(users) {
  return users.filter(u => u.age > 25 && u.isStatus);
}

// Sắp xếp theo tuổi tăng dần
function sortUsersByAge(users) {
  return [...users].sort((a, b) => a.age - b.age);
}


// Bài 3. Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần

function getCountElement(arr) {
  return arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
}

// Ví dụ:
console.log(getCountElement(["one", "two", "three", "one", "one", "three"]));
