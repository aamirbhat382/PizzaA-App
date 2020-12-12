// import axiox from "axios";
// import Noty from "noty";
// import { init } from "./admin"
let addToCart = document.querySelectorAll(".add-to-cart");
let counter = document.getElementById('cart-counter')

function updateCart(pizza) {
    console.log(pizza)
        //  We will Use Axios and Noty 
        //  But We can Not Import due to error 
    fetch('/updateCart', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pizza),
        })
        .then(response => response.json())
        .then(data => {
            counter.innerText = data.totalQty;


            // console.log('Success:', data);
        })
        .catch((error) => {
            console.log('Error:', error);
        });

}
addToCart.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        // console.log(e)
        let pizza = JSON.parse(btn.dataset.pizza)
        updateCart(pizza)
    })
})

// init()