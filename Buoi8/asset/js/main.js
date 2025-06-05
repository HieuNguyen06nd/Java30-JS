const handelClick = ()=>{
    setTimeout(() =>{
        alert("hello")
    }, 3000)
}

document.addEventListener("click", handelClick)

// đong bo - bat dong bo

// callback

// promiset 
// thu thi .then() thanh cong
// .catch()  loi tra ve
//finally

//async(bat dong bo) - await()
 // async fc => promiset

 const hello = async ()=>{
    return "hello"
 }

 hello().then((res)=>{
    console.log(res)
 })
