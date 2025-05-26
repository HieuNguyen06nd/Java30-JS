// cau 1
const giaiThua = (n) =>{
    if(n<0){
        console.log("k co giai thua")
    }
    let sum = 1
    for(let i =2; i<=n ; i++){
        sum*=i
    }
    return sum
}

console.log(giaiThua(4))

// cau 2

const daoChuoi = (str) =>{
    let chuoi = "";
    for(let i= str.length-1; i>=0; i--){
        chuoi += str[i]
    }

    return chuoi
}

console.log(daoChuoi("abc"))


// cau 3
let key = "VN"

switch (key) {
    case "VN":
        console.log("xin chao")
        break;
    case "EN":
        console.log("hello")
        break;

    default:
        console.log("hihi")
        break;
}

// cau 4

const subStr = (str) =>{
    if (str.length > 15) {
        return str.substring(0, 10) + "...";
    }
    return str;
    
}

console.log(subStr("ahahaahahahahahahahha"))