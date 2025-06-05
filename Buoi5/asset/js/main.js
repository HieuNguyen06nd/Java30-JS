document.getElementById("title_1").style.color="red"

const title_2 = document.getElementsByClassName("title_2")
console.log(title_2)

const title_3 = document.getElementsByTagName("h2")
console.log(title_3)

// truyen vao cach dat ten the
// tra ve gt dau tien tim thay

const title_4 = document.querySelector(".title_4")
console.log(title_4)

// querySelectorAll
const title_5 = document.querySelectorAll(".title_2")
console.log(title_5)

// parentNode tham chieu den phan tu cha
const para_1 =  document.querySelector(".para_1")
console.log(para_1)

const paraP = para_1.parentNode;
console.log(paraP)

// truy cap phan tu hien tai
const box2 = document.querySelector(".box1")
let childBox = box2.childNodes

console.log(childBox)

// innerHTML/ innerText/ textContent
const text_para_1 = para_1.innerHTML= "java"


console.log(text_para_1)

// 
para_1.style.color = "green"

// them phan tu mowi
// tao the ao
const box3 = document.querySelector(".box1")

let para_2 = document.createElement("p")
para_2.innerHTML= "hiehieu"

console.log(para_2)

box3.appendChild(para_2)

