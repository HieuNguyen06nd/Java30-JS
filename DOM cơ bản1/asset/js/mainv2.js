
const paragraph = document.getElementById("paragraph");

let content = paragraph.innerText;

// Thay thế dấu phẩy (,) => 🤔 và dấu chấm (.) => 😲
content = content.replace(/,/g, '🤔').replace(/\./g, '😲');

// Tách từ (bao gồm unicode), highlight các từ >= 5 ký tự
content = content.replace(/\b[\p{L}\p{N}]{5,}\b/gu, word => `<span style="background: yellow">${word}</span>`);

// Gán lại nội dung đã xử lý vào đoạn văn
paragraph.innerHTML = content;

// Tính số từ (loại bỏ thẻ HTML)
const rawText = paragraph.innerText;
const wordCount = rawText.trim().split(/\s+/).length;

// Hiển thị số từ trong div
const wordCountDiv = document.getElementById("word-count");
wordCountDiv.textContent = `Số từ trong đoạn văn: ${wordCount}`;

// Thêm link facebook sau thẻ <p>
const facebookLink = document.createElement("a");
facebookLink.href = "https://facebook.com";
facebookLink.textContent = "facebook";
facebookLink.target = "_blank";
facebookLink.style.marginLeft = "10px";

// Thêm sau thẻ đoạn văn
paragraph.insertAdjacentElement("afterend", facebookLink);
