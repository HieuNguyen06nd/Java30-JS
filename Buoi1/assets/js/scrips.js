console.log("asjdlkas");

// khai bao bien let var const

// it dung - gan duoc gia tri- hosting
var name = "java 30";

// gan laij duoc gia tri
let age = 78;
age = 88;

// bien k bij thay doi
const email = "nguyenasasdja";


console.log(name);
console.log(age);
console.log(email);

console.log(typeof(agg))

function hello(){
    console.log("hello hello ");
}

hello();

function check(score){
    if(score > 85){
        console.log("A")
    }else if(score <= 85 && score >50){
        console.log("B");
    }else{
        console.log("C");
    }
}

check(88);

function inSoLonHon(a, b) {
    if (a > b) {
      console.log("Số lớn hơn là: " + a);
    } else if (b > a) {
      console.log("Số lớn hơn là: " + b);
    } else {
      console.log("Hai số bằng nhau: " + a);
    }
  }

inSoLonHon(2,8);

function inSoLonHon(a) {
    if (a > 0) {
      console.log("so la so duong ");
    } else if (a === 0) {
      console.log("Số lớn hơn là so 0");
    } else {
      console.log("So la so am");
    }
  }

  function kiemTraChanLe(n) {
    if (n % 2 === 0) {
      console.log(n + " là số chẵn");
    } else {
      console.log(n + " là số lẻ");
    }
  }


  function kiemTraChiaHet3Va5(n) {
    if (n % 3 === 0 && n % 5 === 0) {
      console.log(n + " chia hết cho cả 3 và 5");
    } else {
      console.log(n + " không chia hết cho cả 3 và 5");
    }
  }

  function kiemTraCongBang(a, b, c) {
    if (a + b === c) {
      console.log("Đúng: " + a + " + " + b + " = " + c);
    } else {
      console.log("Sai: " + a + " + " + b + " ≠ " + c);
    }
  }


const backTicks = `sads " '" 's`;


const fistName = "asd";

const lastName = "ajsdlk";

// const fullname = fistName + "" + lastName;

const fullname = `${fistName}  ${lastName}`

console.log(fullname)
