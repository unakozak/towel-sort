module.exports = function towelSort(matrix) {
    let result = [];
    let i = 0;
    if (matrix === undefined) return result;
    matrix.forEach((element) => {
        result =
            i % 2 === 0
                ? (result = result.concat(element))
                : (result = result.concat(element.reverse()));
        i++;
    });
    return result;
};
