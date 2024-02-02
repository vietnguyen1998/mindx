/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let carry = 0;
    let ai = a.length - 1;
    let bi = b.length - 1;
    let result = "";
    while (ai >= 0 || bi >= 0) {
        if (a[ai]) {
            carry += parseInt(a[ai])
            ai--;
        }
        if (b[bi]) {
            carry += parseInt(b[bi])
            bi--;
        }

        result = (carry % 2) + result;
        carry = parseInt(carry / 2);
    }
    return result;
};

let a = "111", b = "11"

addBinary(a, b)