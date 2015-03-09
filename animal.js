var Animal = {
    constructor: function (name) {
        this.name = name;
        return this;
    },
    getName: function () {
        console.log(this.name);
    }
};

var dog = Object.create(Animal);

dog.constructor("Goofy");
dog.Barks = function () {
    console.log("Dog " + dog.name + " is barking");
};
dog.Barks();
dog.getName();
