function Apple(weight, color) {
    this.weight = weight;
    this.color=color;
}

Apple.prototype = {
    eat: function () {
        return "eat";
    },
    throw: function () {
        return "throw";
    }
};

var a1 = new Apple(21, "red");
var a2 = new Apple(22, "black");
var a3 = new Apple(18, "yellow");

// const title=document.getElementById('main-heading');
// console.log(title);
// Wrap your code in a function and execute it after the DOM has loaded
// document.addEventListener('DOMContentLoaded', function() {
//     const title = document.getElementById('main-heading');
//     console.log(title);
// });

const title=document.getElementById('main-heading');
console.log(title);
