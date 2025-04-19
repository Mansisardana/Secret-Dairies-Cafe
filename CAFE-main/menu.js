    const cart = [];
    const cartIcon = document.querySelector('.cart-icon');
    const cartCountSpan = document.createElement('span');
    cartCountSpan.classList.add('cart-count');
    cartCountSpan.style.marginLeft = '5px';
    cartCountSpan.style.fontWeight = 'bold';
    cartCountSpan.textContent = '0';
    cartIcon.appendChild(cartCountSpan);

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const menuItem = this.closest('.menu-item');
            const itemName = menuItem.querySelector('.item-name').textContent;
            const itemPrice = parseFloat(menuItem.querySelector('.item-price').textContent.replace('$', ''));

            // Add item to cart
            cart.push({ name: itemName, price: itemPrice });

            // Update cart count
            cartCountSpan.textContent = cart.length;

            // Optional: console log the cart
            console.log(cart);
        });
    });
