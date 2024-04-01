class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce = () => {
        console.log(`Меня зовут ${this.name} и мне ${this.age} лет.`);
    }
}

const person1 = new Person("John", 25);
person1.introduce(); 