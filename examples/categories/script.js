"use strict"

const $=s=>document.querySelector(s)
const $$=s=>document.querySelectorAll(s)

const DEFAULT_CATEGORIES = [
    {id: 1, name: 'Fruits', count: 3},
    {id: 2, name: 'Vegetables', count: 3},
    {id: 3, name: 'Meats', count: 3},
    {id: 4, name: 'Bakery', count: 3},
    {id: 5, name: 'Dairy Products', count: 3},
    {id: 6, name: 'Drinks', count: 3}
];

const DEFAULT_PRODUCTS = [
    {id: 1, name: 'Apple', cat_id: 1},
    {id: 2, name: 'Banana', cat_id: 1},
    {id: 3, name: 'Orange', cat_id: 1},
    {id: 4, name: 'Peach', cat_id: 1},
    {id: 5, name: 'Kiwi', cat_id: 1},
    {id: 6, name: 'Strawberry', cat_id: 1},

    {id: 7, name: 'Cabbage', cat_id: 2},
    {id: 8, name: 'Broccoli', cat_id: 2},
    {id: 9, name: 'Onion', cat_id: 2},
    {id: 10, name: 'Carrot', cat_id: 2},
    {id: 11, name: 'Pepper', cat_id: 2},
    {id: 12, name: 'Cucumber', cat_id: 2},
    {id: 13, name: 'Tomato', cat_id: 2},
    {id: 14, name: 'Spinach', cat_id: 2},
    {id: 15, name: 'Cauliflower', cat_id: 2},
    {id: 16, name: 'Beetroot', cat_id: 2},
    {id: 17, name: 'Potato', cat_id: 2},
    {id: 18, name: 'Parsley', cat_id: 2},
    {id: 19, name: 'Eggplant', cat_id: 2},

    {id: 20, name: 'Pork', cat_id: 3},
    {id: 21, name: 'Beef', cat_id: 3},
    {id: 22, name: 'Chicken', cat_id: 3},
    {id: 23, name: 'Veal', cat_id: 3},
    {id: 24, name: 'Fish Meat', cat_id: 3},
    {id: 25, name: 'Pork Ribs', cat_id: 3},

    {id: 26, name: 'Bread', cat_id: 4},

    {id: 27, name: 'Cheese', cat_id: 5},
    {id: 28, name: 'Milk', cat_id: 5},
    {id: 29, name: 'Yogurt', cat_id: 5},

    {id: 30, name: 'Juice', cat_id: 6}
];


const categoryListElm = $("#categoryList");
const productListElm = $("#productGrid");
const htmlElm = $("html");

let activeCategory = DEFAULT_CATEGORIES[0].id;



DEFAULT_CATEGORIES.forEach((item) => {

    categoryListElm.innerHTML += `<div class="category-item d-flex 
align-items-center justify-content-between 
${activeCategory===item.id?'active':''}" data-id="${item.id}">
        <div class="d-flex align-items-center gap-2">
            <i class="bi bi-folder2-open"></i>
            <span class="label fw-semibold">${item.name}</span>
        </div>
        <span class="badge text-bg-info count">3</span>
    </div>`

})

selectCategory(activeCategory);
categoryListElm.onclick = function(e){
    let id = +e.target.closest('.category-item').dataset.id;
    activeCategory=id;
    $(".category-item.active")?.classList.remove("active");
    e.target.closest('.category-item').classList.add("active");
    selectCategory(id)
}


function selectCategory(id){
    let newProductArr = DEFAULT_PRODUCTS.filter(product=>(product.cat_id === id))
    addProduct(newProductArr);
}






function addProduct(newProductArr){
    productListElm.innerHTML = ``
    newProductArr.forEach((product)=>{
        productListElm.innerHTML += `<div class="col-12 col-sm-6 col-lg-4 item-product">
        <article class="product-card h-100 d-flex flex-column">
            <div class="d-flex align-items-center justify-content-between">
                <h6 class="fw-bold mb-0 title">${product.name}</h6>
                <span class="pill small cat-pill">mrger</span>
            </div>
            <p class="muted small mt-2 mb-3 desc">A short description of the product (you may optionally include price, weight, or brand).</p>
            <div class="mt-auto d-flex align-items-center gap-2">
                <div class="dropdown">
                    <button class="btn btn-sm btn-outline-light rounded-pill dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-arrow-left-right me-1"></i> Move
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end move-menu">
                   ${printCatgory(product.id,product.cat_id)}
                    </ul>
                </div>
                <button class="btn btn-sm btn-outline-danger rounded-pill remove-btn"><i class="bi bi-trash3"></i></button>
            </div>
        </article>
    </div>`
    })
}
function printCatgory(id,catId){

    return DEFAULT_CATEGORIES.filter(res=>res.id!==catId).map(res=>(
        `<li><a class="dropdown-item" href="#" data-id="${res.id}" data-productId="${id}">${res.name}</a></li>`
    )).join(" ")

}
productListElm.onclick = function(e){


    if(e.target.getAttribute('data-productId')){
let pId= +e.target.getAttribute('data-productId')
        let cId= +e.target.getAttribute('data-id')
        let value=DEFAULT_PRODUCTS.find(res=>res.id===pId)
            let catId=value.cat_id
            value.cat_id=cId
        e.target.closest(".item-product").remove();

        document.querySelector(`.category-item[data-id="${catId}"] .count`).innerHTML--
        document.querySelector(`.category-item[data-id="${cId}"] .count`).innerHTML++




    }
  else if(e.target.closest(".remove-btn")){
       e.target.closest(".item-product").remove();
   }
}

$("#resetFilter").onclick = function(){
    productListElm.innerHTML = ``
    addProduct(DEFAULT_PRODUCTS)
}



$("#themeToggle").onclick = function(){
    if(htmlElm.dataset.theme === "dark"){
        htmlElm.dataset.theme = "light"
    }else{
        htmlElm.dataset.theme = "dark"
    }
}



