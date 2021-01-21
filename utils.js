export function findById(array, id) {
    for (const item of array) {
        if (item.id === id) {
            return item;
        }
    }}

export function calcItemTotal(cartArray, inventoryArray, id) {
    const itemQuantity = findById(cartArray, id);
    const itemPrice = findById(inventoryArray, id);

    return itemQuantity.quantity * itemPrice.price;
}
