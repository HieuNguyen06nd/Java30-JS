// -------- Câu 1 --------
const textElement = document.getElementById("text");
textElement.style.color = "#777";
textElement.style.fontSize = "2rem";
textElement.innerHTML = 'Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.';

// -------- Câu 2 --------
const allLis = document.querySelectorAll("ul li");
allLis.forEach(li => {
  li.style.color = "blue";
});

// -------- Câu 3 --------
const list = document.getElementById("list");

// Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
for (let i = 8; i <= 10; i++) {
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${i}`;
  list.appendChild(newItem);
}

// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
if (list.children[0]) {
  list.children[0].style.color = "red";
}

// Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
if (list.children[2]) {
  list.children[2].style.backgroundColor = "green";
}

// Remove thẻ <li> 4
const removed = list.children[3];
if (removed) {
  list.removeChild(removed);
}

// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
const replacement = document.createElement("li");
replacement.textContent = "Thẻ mới được thêm vào";
if (list.children[3]) {
  list.insertBefore(replacement, list.children[3]);
} else {
  list.appendChild(replacement);
}
