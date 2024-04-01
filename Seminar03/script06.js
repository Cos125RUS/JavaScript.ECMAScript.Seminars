// Создать класс "Товар" с приватными полями "название", "цена" и "количество". Класс должен иметь публичные методы "изменить цену", "изменить количество" и "получить стоимость", которые будут изменять соответствующие поля объекта и возвращать стоимость товара соответственно. Также класс должен иметь статическое поле "максимальное количество", которое будет задавать максимально допустимое количество товара для всех создаваемых объектов.

class Product {
    static #maxCount = 100;
    #name;
    #price;
    #quantity;

    constructor(name, price, quantity) {
        this.#name = name;
        this.#price = price;
        if (quantity > Product.#maxCount) {
            throw new Error(`Max quantity is ${Product.#maxCount}`);
        } 
        if (quantity < 0) {
            throw new Error(`Min quantity is 0`);
        }
        this.#quantity = quantity;
    }

    get name() { return this.#name; }
    set name(value) { this.#name = value; }
    get price() { return this.#price; }
    set price(value) { this.#price = value; }
    get quantity() { return this.#quantity; }
    setQuantity = (value) => {
        if (value > Product.#maxCount) {
            throw new Error(`Max quantity is ${Product.#maxCount}`);
        } 
        if (value < 0) {
            throw new Error(`Min quantity is 0`);
        }
        this.#quantity = value;
    }
}

const iPhone = new Product('iPhone', 100000, 10);
console.log(iPhone.name);
console.log(iPhone.price);
console.log(iPhone.quantity);

iPhone.setQuantity(50);
console.log(iPhone.quantity);

const Samsung = new Product('Samsung', 50000, -5);
