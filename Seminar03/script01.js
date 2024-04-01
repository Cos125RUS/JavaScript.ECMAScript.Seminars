const MyObject = {
    a: 1
};

const getPrototypeChain = (obj) => {
    let array = [];
    while (obj !== null) {
        array.push(obj);
        obj = Object.getPrototypeOf(obj);
    }
    return array;
}

console.log(getPrototypeChain(MyObject));
console.log(MyObject);