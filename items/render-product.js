import { addToCart, getCart } from '../shopping-cart/utils.js';

export function renderProduct(plant) {
    const item = document.createElement('li');
    const itemID = document.createElement('p');
    const itemName = document.createElement('h3');
    const itemImage = document.createElement('img');
    const itemDescription = document.createElement('p');
    const itemFragrant = document.createElement('p');
    const itemSafety = document.createElement('p');
    const itemPriceButton = document.createElement('button');

    item.classList.add('list-item');
    itemID.classList.add('item-id');
    itemName.classList.add('item-name');
    itemImage.classList.add('item-image');
    itemDescription.classList.add('item-description');
    itemFragrant.classList.add('item-fragrant');
    itemSafety.classList.add('item-safety');
    itemPriceButton.classList.add('item-price');
    
    itemID.textContent = `ID: ${plant.id}`;
    itemName.textContent = plant.name;
    itemImage.src = `../assets/images/${plant.image}`;
    itemImage.alt = `${plant.name} flower`;
    itemDescription.textContent = plant.description;
    itemPriceButton.addEventListener('click', () => {
        getCart();
        addToCart(plant.id);
    });
    
    if (plant.fragrant === true) {
        itemFragrant.textContent = `Fragrant? Yes.`;
    } else {
        itemFragrant.textContent = `Fragrant? No.`;
    }

    itemSafety.textContent = `Safety notes: ${plant.safetyNotes}`;
    itemPriceButton.value = plant.id;
    itemPriceButton.textContent = `€${plant.price}`;

    item.append(itemID);
    item.append(itemName);
    item.append(itemImage);
    item.append(itemDescription);
    item.append(itemFragrant);
    item.append(itemSafety);
    item.append(itemPriceButton);

    return item;
    
}
