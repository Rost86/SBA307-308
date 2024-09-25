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

    // Reviews AJAX load
    const reviewsGrid = document.querySelector('.reviews-grid');
    const loadMoreButton = document.getElementById('load-more');
    const noMoreReviewsText = document.getElementById('no-more-reviews');

    let reviews = [];
    let reviewsLoaded = 0;

    // Fetch reviews from the JSON file
    fetch('/json_data/reviews.json')
        .then(response => response.json())
        .then(data => {
            reviews = data;
            loadMoreReviews(4);
        })
        .catch(error => console.error('Error fetching reviews:', error));


    function loadMoreReviews(count) {
        for (let i = 0; i < count; i++) {
            if (reviewsLoaded < reviews.length) {
                const review = reviews[reviewsLoaded];
                const reviewDiv = document.createElement('div');
                reviewDiv.classList.add('review');
                reviewDiv.textContent = `"${review.text}" - ${review.author}`;
                reviewsGrid.appendChild(reviewDiv);
                reviewsLoaded++;
            } else {
                loadMoreButton.style.display = 'none';
                noMoreReviewsText.style.display = 'block';
                break;
            }
        }
    }

    // Event listener for the "Load more" button
    loadMoreButton.addEventListener('click', () => {
        loadMoreReviews(4);
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
