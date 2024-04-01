class Animal {
    constructor(name) {
        this.name = name;
    }

    speak = () => {
        console.log(`${this.name} издаёт какой-то звук`);
    } 
}

class Dog extends Animal {
    constructor(name,  breed) {
        super(name);
        this.breed = breed;
    }

    fetch = () => {
        console.log(`Собака породы ${this.breed} по кличке ${this.name} принесла мяч`);
    }
}

const something = new Animal('Нечто');
something.speak();

const bobbik = new Dog('Бобик', 'Лабрадор');
bobbik.speak();
bobbik.fetch();