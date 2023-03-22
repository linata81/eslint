/* eslint-disable no-console */
const a = 1;

let x = 200;

function foo(name) {
  const lastName = name;
  return lastName;
}

foo('Nata');

x++;

// eslint-disable-next-line no-console
console.log(x, a);

// kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkg

const arrow = (y) => y + 1;
arrow(2);

const obj = {
  name: 'Nata',
};

const name = obj.name;