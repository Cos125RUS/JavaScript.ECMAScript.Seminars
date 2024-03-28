const calculator = {
    add: function (num1, num2) {
        return num1 + num2;
    }, 
    subtract: function (num1, num2) {
        return num1 - num2;
    }, 
    multiply: function (num1, num2) {
        return num1 * num2;
    }
}

console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2

const User = {
    name: 'Bob',
    hello: function () {
        console.log(`Hello ${this.name}`);
    }
}

const User2 = {
    name: 'Tom',
}

User.hello();
User.hello.call(User2);