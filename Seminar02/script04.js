class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce = () => {
        console.log(`My name is ${this.name}. I'm ${this.age} years old.`);
    }
}

const user1 = new Person('John', 25);
user1.introduce();
const user2 = new Person('Bob', 35);
user2.introduce();
