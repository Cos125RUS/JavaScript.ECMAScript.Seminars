const Person = {
    name: this.name,
    age: this.age,
    gender: this.gender,
    introduce: function () {
        console.log(`My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}.`);
    },
    changeName: function(name) {
        this.name = name;
    }
}

Person.name = "John";
Person.age = 25;
Person.gender = "male";
Person.introduce(); 
Person.changeName("Mike");
Person.introduce(); 