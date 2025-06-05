// // 1. Truy cập phần tử trong DOM
// const childrent = document.querySelector(".childrent");
// const parent = document.querySelector(".parent");

// // 2. Xóa phần tử con khỏi DOM
// parent.removeChild(childrent);
// // cacsh 2
// childrent.parentNode.removeChild(childprent)

// //cach1
// const click_me = ()=>{
//     alert("hihi")
// }

// // cach2 addEvenListener

// let submitFormHtml = document.querySelector(".button-submit")

// submitFormHtml.addEventListener("click",()=>{
//     alert("hihi")
// } )


const button_chat = document.querySelector(".button-chat")
const content = document.querySelector(".content")
 
const messenger = () => {
      if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
};

button_chat.addEventListener("click",messenger)