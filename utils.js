export function findById(array, id) {
    for (const item of array) {
        if (item.id === id) {
            return item;
        } else null;
    }}

export function calcItemTotal(cartArray, inventoryArray, id) {
    const itemQuantity = findById(cartArray, id);
    const itemPrice = findById(inventoryArray, id);
    
    return itemQuantity.quantity * itemPrice.price;
}

export function calcCartTotal(shoppingCart, plants) {
    let total = 0;

    for (const cartItem of shoppingCart) {
        let lineTotal = calcItemTotal(shoppingCart, plants, cartItem.id);
        
        total += lineTotal;
    }
    return total;
}
