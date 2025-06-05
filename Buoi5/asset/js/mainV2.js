let products = [
    {
        name: "Iphone 13 Pro Max",
        price: 3000000,
        brand: "Apple",
        count: 2,
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
];

// 1. In ra thông tin các sản phẩm
products.forEach(p => {
    console.log(`${p.name} - ${p.price} - ${p.brand} - ${p.count}`);
});

// 2. Tính tổng tiền
let total = products.reduce((sum, p) => sum + p.price * p.count, 0);
console.log("2. Tổng tiền:", total);

// 3. Sản phẩm của Apple
let appleProducts = products.filter(p => p.brand === "Apple");
console.log("3. Sản phẩm Apple:", appleProducts);

// 4. Sản phẩm có giá > 20 triệu
let expensiveProducts = products.filter(p => p.price > 20000000);
console.log("4. Giá > 20tr:", expensiveProducts);

// 5. Sản phẩm có "pro" trong tên (không phân biệt hoa thường)
let proProducts = products.filter(p => p.name.toLowerCase().includes("pro"));
console.log("5. Tên chứa 'pro':", proProducts);

// 6. Thêm sản phẩm bất kỳ
products.push({
    name: "Xiaomi Mi 11",
    price: 12000000,
    brand: "Xiaomi",
    count: 2,
});
console.log("6. Sau khi thêm Xiaomi:", products);

// 7. Xoá sản phẩm thương hiệu Samsung
products = products.filter(p => p.brand !== "Samsung");
console.log("7. Sau khi xoá Samsung:", products);

// 8. Sắp xếp theo giá tăng dần
let sortByPrice = [...products].sort((a, b) => a.price - b.price);
console.log("8. Sắp theo giá tăng dần:", sortByPrice);

// 9. Sắp xếp theo số lượng giảm dần
let sortByCountDesc = [...products].sort((a, b) => b.count - a.count);
console.log("9. Sắp theo count giảm:", sortByCountDesc);

// 10. Lấy ra 2 sản phẩm bất kỳ
let twoRandomProducts = products.slice(0, 2);
console.log("10. Hai sản phẩm bất kỳ:", twoRandomProducts);
