/*var i = 23;

for (var i =0; i < 5; i++) {
    console.log(i);
}

console.log(i);

{
    const a = 5;

    console.log(a);
    console.log(`This is, a number ${a}`)
}


const years = [1990, 2000, 1991];

years.map(function(val) {
    console.log(new Date().getFullYear() - val);
});

years.map(val => {
    console.log(new Date().getFullYear() - val);
});





const greenBox = {
   color: 'green',
   position: 1,

   clickMe: function() {
       document.querySelector('.' + this.color).addEventListener('click', () => {
            console.log('color = ' + this.color);
            console.log(this);
       });
   } 
};

greenBox.clickMe();


function Person(name) {
    this.name = name;
}

Person.prototype.test = function(arr) {
    console.log(arr.map(el => `${this.name} = ${el}`));
}

new Person('Andrew').test(['test1', 'test2']);



const boxes = document.querySelectorAll('.box');

boxes.forEach(el => {
    el.style.backgroundColor = 'dodgerblue';
    if (el.className === 'box blue') {
        return;
    }
    el.textContent = 'I\'m changed to blue.';
});





function addNums(a, b, c) {
    return a + b + c;
};

const arr = [12, 13, 14];
console.log(addNums(...arr));


const arr2 = [15, 16, 17];


console.log([arr, arr]);
*/

class Utils {
    static average(...parks) {
        let sum = 0;
        parks
            .map(item => item.getAge())
            .forEach(item => sum += item);

        return sum / parks.length;
    }

    static getLongNameParks(parks) {
        return parks
            .filter(el => el.getTreesCount() > 1000)
            .map(el => el.getName());
    }
}

class Park {
    constructor(area, treesCount, yearOfBuild, name) {
        this.area = area;
        this.treesCount = treesCount;
        this.yearOfBuild = yearOfBuild;
        this.name = name;
    }

    treeDensity() {
        return this.treesCount / this.area;
    }

    getAge() {
        return new Date().getFullYear() - this.yearOfBuild;
    }

    getName() {
        return this.name;
    }

    getTreesCount() {
        return this.treesCount;
    }
}


const parkGloba = new Park(1000, 100, 1990, 'Globa');

const parkShvc = new Park(1242, 433, 2000, 'Shvc');

const parkTest = new Park(23332, 1010, 1950, 'Test');

const allParks = [parkGloba, parkShvc, parkTest];

// console.log(Utils.average(parkGloba, parkShvc, parkTest));

console.log(Utils.getLongNameParks(allParks));






























































