console.log("hihi")
// .map()
const array_1 = ["nho", "cam" , "oi" , "tao"]
array_1.map((item, index)=> {
    console.log(item)
});

//filter
console.log("day la filter")

const arr_2 = [1,2,3,4,5,6];
const ip = arr_2.filter((value, _)=>{
    console.log(value)
    return value % 2 ==0
});
console.log(ip)

// reduce
const sumA = arr_2.reduce((total, currentValue)=>{
    return total+currentValue
},0 ) //dependency

console.log(sumA)

// find()
const arr_3 = [
    {
        id : 1,
        name: "hihi"
    },
        {
        id : 2,
        name: "h2ihi"
    },
        {
        id : 3,
        name: "hihi"
    }
]
const result = arr_3.find((value , _)=>{
    return value.name== "hihi"
})

console.log(result)

// some()

// every()

// phuong thuc object
// Object.keys
// Object.values

// for -- in
const user = {
    id:1,
    name: "hieu",
    age:22
}

for(const key in user){
    console.log(key)
}