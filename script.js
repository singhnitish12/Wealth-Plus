document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.button');
    const cartItems = document.getElementById('cart-items');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemName = this.parentElement.querySelector('h5').innerText;
            const cartItem = document.createElement('li');
            cartItem.textContent = itemName;
            cartItems.appendChild(cartItem);
        });
    });
});