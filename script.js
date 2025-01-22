const productImages = document.querySelectorAll('.product-image');

productImages.forEach(image => {
    image.addEventListener('click', () => {
        const productName = image.nextElementSibling.textContent; 
        alert(`"${productName}" added to cart!`); 
        // Here you would typically add logic to actually update your cart 
        // (e.g., using JavaScript, local storage, or a server-side script)
    });
});