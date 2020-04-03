var sayMyName = function (name) {
    alert('Hello there ' +name);
}

var dog = {
    breed: 'Samyod',
    type: 'Large',
    color: 'White',
    isBarking: true,
    numberOfEars: 2,
    legs: ['leg 1', 'leg 2', 'leg 3', 'leg 4'],
        
    turnOn: function () {
        this.isBarking = false;
    },

    turnOff: function () {
        this.isBarking = true;
    },

    fly: function () {
        alert('fly');
    },

    switchDog: function (isBark) {
        console.log('my dog '+isBark);
        if (isBark == true) {
            this.isBarking = true;
        } else {
            this.isBarking = false;
        }
    }
        
    };

    console.log('hello there friends!');