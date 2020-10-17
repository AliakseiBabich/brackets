module.exports = function check (str, bracketsConfig) {
    const elementsStack = [];
    const brackets = Object.fromEntries(bracketsConfig);
    console.log(brackets);
    for (let element of str.split``) {
        if (elementsStack[0] === element) {
            elementsStack.shift();
        } else if (brackets[element]) {
            elementsStack.unshift(brackets[element]);
        } else {
            return false;
        }
    }

    return elementsStack.length === 0;
};
