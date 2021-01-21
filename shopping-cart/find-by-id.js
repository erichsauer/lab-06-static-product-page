export function findById(array, id) {
    for (const item of array) {
        if (item.id === id) {
            return item;
        }
    }}