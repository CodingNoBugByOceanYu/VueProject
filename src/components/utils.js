export const applyDrag = (arr, dragResult) => {
    console.log(arr, dragResult, 'util');

    const { removedIndex, addedIndex, payload } = dragResult
    if (removedIndex === null && addedIndex === null) return arr

    const result = [...arr]
    let itemToAdd = payload

    if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0]
    }

    if (addedIndex !== null) {
        // if (arr.length > 0) {
        //     for (let i = 0; i < arr.length; i++) {
        //         if (arr[i].id === itemToAdd.id) {
        //             itemToAdd.id += '_1';
        //         }
        //     }
        // }
        result.splice(addedIndex, 0, itemToAdd)
    }
    return result
};

export const generateItems = (count, creator) => {
    const result = []
    for (let i = 0; i < count; i++) {
        result.push(creator(i))
    }
    return result
};