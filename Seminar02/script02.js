const Animal = {
    name: this.name,
    eat: function (){
        console.log(`${this.name} кушает`);
    }
}

const Dog = {
    name: this.name,
    bark: function (){
        console.log(`${this.name} лает`);
    }
}

Dog.name = 'Бобик';
Dog.eat = Animal.eat;
Dog.eat();