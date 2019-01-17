/*var years = [1990, 1995, 2000, 2001, 1968];

function arrayCalc(arr, fn) {
    var result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i]));
    }
    return result;
}

function calcAge(el) {
    return 2018 - el;
}

function determineFullAge(el) {
    if ((2018 - el) >= 18) {
        return 2018 - el;
    }
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calcAge);
console.log(ages);
console.log(arrayCalc(years, determineFullAge));
console.log(arrayCalc(ages, maxHeartRate));

function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ' designer');
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log(name + ' teacher');
        }
    } else {
        return function (name) {
            console.log('NaN');
        }
    }
}

interviewQuestion('designer')('john');

(
    function (text) {
        console.log('IIFE ' + text);
    }
)('test');

function retirement(retirementAge) {
    var s = ' years left until retirement.';
    return function (yearOfBird) {
        var year = 2018 - yearOfBird;
        console.log((retirementAge - year) + s)
    }
}

console.log(retirement().s);
console.log(retirement().retirementAge);

var john = {
    name: 'john',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + '. I\`m ' + this.name);
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up. ' + name)
        }
    }
};

var emily = {
    name: 'Emily',
    age: 22,
    job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.bind(emily, 'formal')('evening');

john.presentation.apply(emily, ['friendly', 'evening']);

emily.presentation = john.presentation;
emily.presentation('friendly', 'evening');

var john = {
    name: 'john',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + '. I\`m ' + this.name);
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up. ' + name)
        }
    }
};
var emily = {
    name: 'emily',
    age: 26,
    job: 'teacher',
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'formal', 'evening');

var test = john.presentation.bind(john, 'friendly');

test('morning');


function isFullAge(limit, el) {
    return el >= limit;
}

var fullAge = isFullAge.bind(this, 18);

console.log(fullAge(16));
*/












































