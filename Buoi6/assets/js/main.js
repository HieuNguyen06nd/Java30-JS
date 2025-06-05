const product = [
    { id: 1, img: "./assets/img/anh1.jpg", title: "ao polo 1" },
    { id: 2, img: "./assets/img/anh1.jpg", title: "ao polo 2" },
    { id: 3, img: "./assets/img/anh1.jpg", title: "ao polo 3" },
    { id: 4, img: "./assets/img/anh1.jpg", title: "ao polo 4" },
    { id: 5, img: "./assets/img/anh1.jpg", title: "ao polo 4" },
];

let row_js = document.querySelector(".row-js");
let productHtml = "";

product.forEach((item) => {
    productHtml += `
        <div class="col">
            <div class="product-item">
                <img src="${item.img}" alt=""> 
                <h3>${item.title}</h3>                   
            </div>
        </div>
    `;
});

row_js.innerHTML = productHtml;
