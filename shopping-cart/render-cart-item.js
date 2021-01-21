import { findById, calcItemTotal } from '../utils.js';

export function renderCartItem(inventoryArray, cartArray, id) {
    const inventoryItem = findById(inventoryArray, id);
    const cartItem = findById(cartArray, id);

    const mainTr = document.createElement('tr');
    const imageTd = document.createElement('td');
    const img = document.createElement('img');
    const nameTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const lineTotalTd = document.createElement('td');

    const lineTotal = calcItemTotal(cartArray, inventoryArray, id);
    
    img.src = `../assets/images/${inventoryItem.image}`;
    img.alt = inventoryItem.name;

    nameTd.textContent = inventoryItem.name;
    quantityTd.textContent = cartItem.quantity;
    lineTotalTd.textContent = `€${lineTotal}`;

    imageTd.append(img);
    mainTr.append(imageTd, nameTd, quantityTd, lineTotalTd);
    return mainTr;
}