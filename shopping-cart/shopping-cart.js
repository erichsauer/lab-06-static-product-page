import { plants } from '../items/data.js';
import { calcCartTotal } from '../utils.js';
import { renderCartItem } from './render-cart-item.js';
import { clearCart, getCart } from './utils.js';

const shoppingCart = getCart();
const tableBody = document.querySelector('tbody');
const orderButton = document.getElementById('place-order');
const tableHeader = document.querySelector('thead');
const tableFooter = document.querySelector('tfoot');
const orderTotalCell = document.getElementById('order-total');

for (const cartItem of shoppingCart) {
    
    let tableRowDOM = renderCartItem(plants, shoppingCart, cartItem.id);
    
    tableBody.append(tableRowDOM);
}

let total = calcCartTotal(shoppingCart, plants);

orderTotalCell.textContent = `Order Total: €${total}`;

orderButton.addEventListener('click', () => {
    alert(JSON.stringify(shoppingCart, true, 2));
    clearCart();
});

if (!total) {
    tableHeader.style.display = 'none';
    tableFooter.style.display = 'none';
    orderButton.style.display = 'none';
}
