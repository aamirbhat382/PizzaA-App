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

// Change order status
let statuses = document.querySelectorAll('.status_line')
let hiddenInput = document.querySelector('#hiddenInput')
let order = hiddenInput ? hiddenInput.value : null
order = JSON.parse(order)
let time = document.createElement('small')

function updateStatus(order) {
    statuses.forEach((status) => {
        status.classList.remove('step-completed')
        status.classList.remove('current')
    })
    let stepCompleted = true;
    statuses.forEach((status) => {
        let dataProp = status.dataset.status
        if (stepCompleted) {
            status.classList.add('step-completed')
        }
        if (dataProp === order.status) {
            stepCompleted = false
            time.innerText = order.updatedAt
            status.appendChild(time)
            if (status.nextElementSibling) {
                status.nextElementSibling.classList.add('current')
            }
        }
    })
}
updateStatus(order);
let times = Date()
times.toLocaleString
console.log(times)