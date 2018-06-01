export const applyDrag = function(arr, dragResult) {

    var i = 0,
        itemToAdd = dragResult.payload;


    if (arr.length === 0) {
        arr.push(itemToAdd);
    } else {
        _.forEach(arr, function (item) {
            if (item.id === itemToAdd.id) {
                var obj = {
                    id: itemToAdd.id + '_1',
                    img: itemToAdd.img,
                    text: itemToAdd.text
                }
                arr.push(obj);
            } else {
                i++;
            }
        });
        if (i === arr.length) {
            arr.push(itemToAdd);
        }
    }
    return arr;
};

export const generateItems = (count, creator) => {
    const result = []
    for (let i = 0; i < count; i++) {
        result.push(creator(i))
    }
    return result
};