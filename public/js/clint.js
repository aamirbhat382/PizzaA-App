let addToCart = document.querySelectorAll(".add-to-cart");

function updateCart(pizza) {
    console.log(pizza)
}
addToCart.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e)
        let pizza = JSON.parse(btn.dataset.pizza)
        updateCart(pizza)
    })
})