// Создать класс "Пользователь" с приватными полями "имя", "возраст" и "электронная почта". Класс должен иметь публичные методы "изменить имя", "изменить возраст" и "изменить электронную почту", которые будут изменять соответствующие поля объекта. Также класс должен иметь статическое поле "максимальный возраст", которое будет задавать максимально допустимый возраст для всех создаваемых объектов.

class Person {
    static maxAge = 120; 
    #name;
    #age;
    #email;

    constructor(name, age, email) {
        this.#name = name;
        if (age > Person.maxAge) {
            throw new Error("(In constructor) maxAge must be greater than 120");
        }
        this.#age = age;
        this.#email = email;
    }

    getName = () => this.#name;
    setName = (name) => {
        this.#name = name;
    }
    getAge = () => this.#age;
    setAge = (age) => {
        if (age > Person.maxAge) {
            throw new Error("maxAge must be greater than 120");
        }
        this.#age = age;
    }
    getEmail = () => this.#email;
    setEmail = (email) => {
        this.#email = email;
    }
}

const user1 = new Person('John', 50, 'john@mail.com');
console.log(user1.getName());
user1.setName('Frank');
console.log(user1.getName());
user1.setAge(100);
console.log(user1.getAge());
user1.setEmail('Frank@mail.com');
console.log(user1.getEmail());

const user2 = new Person('John', 130, 'john@mail.com');

