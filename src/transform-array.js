module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Error');
    };
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === '--discard-next') {
            i++;
        } else if (arr[i] === '--discard-prev') {
            if (i !== 0)
                newArray.pop();
        } else if (arr[i] === '--double-next') {
            if (i !== arr.length - 1)
                newArray.push(arr[i + 1]);
        } else if (arr[i] === '--double-prev') {
            if (i !== 0)
                newArray.push(arr[i - 1]);
        } else {
            newArray.push(arr[i]);
        }
    }
    return newArray;
};
