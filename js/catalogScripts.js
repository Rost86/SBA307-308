document.addEventListener('DOMContentLoaded', () => {
    let cartCount = 0;

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            // Update cart item count
            cartCount++;
            document.getElementById('cart-count').textContent = cartCount;

            // Get the product name and price from data attributes
            const productName = button.getAttribute('data-name');
            const productPrice = button.getAttribute('data-price');

            // Update the alert text with the product name and price
            const alertBox = document.getElementById('cart-alert');
            alertBox.textContent = `${productName} (${productPrice}) added to cart!`;

            // Show the alert
            alertBox.classList.add('show');

            // Hide the alert after 2 seconds
            setTimeout(() => {
                alertBox.classList.remove('show');
            }, 2000);
        });
    });


    document.getElementById('subscribe-form').addEventListener('submit', function(event) {
        const emailInput = document.getElementById('email');
        const errorMessage = document.getElementById('error-message');

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailInput.value)) {
            event.preventDefault(); 
            errorMessage.style.display = 'block'; 
        } else {
            errorMessage.style.display = 'none'; 
        }
    }); 

});
