const addToCartButtons = document.querySelectorAll(".add_to_cart");
let cartCount = parseInt(document.querySelector(".cart-count").innerText);
let cartContent = document.querySelector(".cart-modal-content");
let quantityBtns = document.querySelectorAll(".quantity");
let items = document.querySelectorAll(".item");
let increaseBtns = document.querySelectorAll(".increase-quantity");
let decreaseBtns = document.querySelectorAll(".decrease-quantity");
let quantityvalues = document.querySelectorAll(".quantity span");

let costArray = [];
document.querySelectorAll(".cost").forEach((costElement)=> {
    costArray.push(costElement.innerText);
});

console.log(costArray);

let itemQuantities = new Array(items.length).fill(0);

addToCartButtons.forEach(function(button, index) {
    button.addEventListener("click", function() {
        this.style.display = "none";
        quantityBtns[index].style.display = "flex";

        cartCount++;
        document.querySelector(".cart-count").innerText = cartCount;

        itemQuantities[index]++;
        updateCart();
    });
});

increaseBtns.forEach((button, index) => {
    button.addEventListener("click",() => {
        increaseQuantity(index);
    });
});

decreaseBtns.forEach((button, index) => {
    button.addEventListener("click", () =>{
        decreaseQuantity(index);
    });
});

function increaseQuantity(index) {
    let value = parseInt(quantityvalues[index].innerText);
    value++;
    quantityvalues[index].innerText = value;
    itemQuantities[index]++;
    updateCart();
}

function decreaseQuantity(index) {
    let value = parseInt(quantityvalues[index].innerText);
    if (value > 1) {
        value--;
        quantityvalues[index].innerText = value;
        itemQuantities[index]--;
        updateCart();
    } else {
        quantityBtns[index].style.display = "none";
        addToCartButtons[index].style.display = "block";
        cartCount--;
        document.querySelector(".cart-count").innerText = cartCount;
        document.querySelector(".cart-item").remove();
        itemQuantities[index] = 0;
        updateCart();
    }
}


function cost(index){
    let finalcost = 0;
    for (let i = 0; i < items.length; i++) {
        finalcost += costArray[i] * itemQuantities[i];
    }
    document.querySelector(".final-cost").innerText = "₹" + finalcost;
}

function updateCart() {
    if (itemQuantities.some(quantity => quantity > 0)) {
        cartContent.innerHTML = "";
        itemQuantities.forEach((quantity, index) => {
            if (quantity > 0) {
                cartContent.innerHTML += "<div class='cart-item'>" + items[index].querySelector("figure").innerHTML + "<span class='quantity'>" + quantity + "</span></div>";
                cost(index);
                document.querySelector(".place-order-section").style.display = "flex";
            }
        });
        
    } else {
        cartContent.innerHTML = "IS EMPTY <button id='start-shopping' onclick='closeModal'>Add items</button>";
        document.querySelector(".place-order-section").style.display = "none";
    }
}

document.querySelector(".place-order").onclick = () => {
    cartContent.innerHTML = "<div class='order-placed'> <i class='fa-solid fa-circle-check'></i> <h3>Order Placed<h3></div>"
}   





