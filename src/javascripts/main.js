//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

//blog
document.querySelectorAll(".like-button").forEach(
    function (button) {
        button.onclick = function () { likeButton(button) }
    }
)

function likeButton(r) {
    if (r.classList.contains("like-button-red")) {
        r.classList.remove("like-button-red")
    }
    else
        r.classList.add('like-button-red')
}

//shopping
function hideMerch() {
    document.querySelector("#purchase-items").classList.add('d-none')
    document.querySelector("#cart").classList.remove('d-none')
}

function hideCart() {
    document.querySelector("#purchase-items").classList.remove('d-none')
    document.querySelector("#cart").classList.add('d-none')
}

document.querySelector("#hide-cart").onclick = hideCart
document.querySelector("#hide-merch").onclick =
    function () {
        hideMerch()
        displayCart()
    }


document.querySelectorAll(".card").forEach(function (card) {
    let name = card.querySelector(".card-title")
    let price = card.querySelector(".price")
    let image = card.querySelector(".card-img-top")
    let imagelink = image.src

    card.querySelector(".add-to-cart").onclick = function () {
        console.log("Add to cart clicked"); // Debugging statement
        addToCart(name, price, imagelink);
        addToCartAlert();
    }
})
//function add to cart alert
function addToCartAlert() {
    alert("Item added to cart!");
}



let cartItems = [] //an empty array that add to cart will append to

// function addToCart
function addToCart(Ename, Eprice, Eimagelink) {
    cartItems.push({
        title: Ename.textContent,
        price: Eprice.textContent,
        imgSrc: Eimagelink
    }
    )
    displayCart()
}

function removeFromCart(r) {
    cartItems.splice(r, 1)
    displayCart()
}

//function displayCart
function displayCart() {
    let products = cartItems
    let producthtml = ''
    if (products.length == 0) {
        producthtml =
            `
        <h1>Your Cart is empty</h1>
        `
    }
    else {
        //if the cart is empty display an h1: Your cart is empty
        for (let x of products) {
            producthtml +=
                `
        <div class="cart-item-card d-flex flex-row">
        <div class="product-image">
          <img src="${x.imgSrc}" alt="product-image" class="h-100">
        </div>
        <div class="product-body d-flex flex-column">
        <div class="product-body-upper">
          <h4>${x.title}</h4>
          <p>${x.price}</p>
        </div>
        <div class="product-body-lower">
          <button type="button" class="btn btn-danger remove-item">Remove Item</button>
        </div>
        </div>
        
        </div>
        `
        }
    }
    document.querySelector("#cart-item").innerHTML = producthtml

    document.querySelectorAll(".cart-item-card").forEach(function (product, index) {
        let removeButtons = product.querySelectorAll(".remove-item")

        removeButtons.forEach(function (button) {
            button.onclick = function () {
                console.log("Remove Item clicked") //debug statement
                removeFromCart(index)
            }
        })
    })

    document.querySelector("#submit-btn").onclick = function () {
        console.log("Submit button clicked")
        submitOrderAlert()
        hideCart()
    }
    function submitOrderAlert() {
        alert("Thank you for your order, you will receive a confirmation email soon")

    }
}

//after pressing add-to-cart that card title, img src, and price are taken
//and made into a card within the cart, where there is an additional remove
//button that deletes the card from the cart



