'use strict';
var fizzbuzzchan = document.getElementById('fizzbuzzchan');
var numId = document.getElementById('num');
var result = document.getElementById('result');


var random_ob = {
  num: null,
  num_array: new Array
}

const ado = {
  fizz: new Audio('./fizz.wav'),
  buzz: new Audio('./buzz.wav'),
  fizz_buzz: new Audio('./fizzbuzz.wav')
}

document.body.onkeypress = () => {
  setInterval(random_f, 200);
}

function random_f() {
  random_ob.num = Math.ceil(Math.random() * 99);
  random_ob.num_array.push(random_ob.num);
  numId.innerText = random_ob.num;
  fizzbuzzchan.innerText = (random_ob.num_array.reverse());
  if (random_ob.num % 15 === 0) {
    ado.fizz_buzz.play();
    result.innerText = 'FizzBuzz!';
  } else if (random_ob.num % 5 === 0) {
    ado.buzz.play();
    result.innerText = 'Buzz!';
  } else if (random_ob.num % 3 === 0) {
    ado.fizz.play();
    result.innerText = 'Fizz!';
  };
};