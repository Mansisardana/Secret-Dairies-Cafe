document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cart = [];
  
    function updateCart() {
      cartItemsContainer.innerHTML = ''; // Clear cart list
      let total = 0;
  
      cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(li);
        total += item.price;
      });
  
      cartTotal.textContent = total.toFixed(2);
    }
  
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        const name = item.getAttribute('data-name');
        const price = parseFloat(item.getAttribute('data-price'));
  
        cart.push({ id, name, price });
        updateCart();
      });
    });
  });
  