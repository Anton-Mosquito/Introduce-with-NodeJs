function square(num) {
    return check(num) ? num * num : null;
}

function cube(num) {
    return check(num) ? num * num * num : null;
}

function check(num) {
    return num > 0;
}

exports.square = square;
exports.cube = cube;