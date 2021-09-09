//ejemplo1
const moneyCounter = (i) => {
  let count = i;
  const counts = () => {
    console.log(`valor $${count++}`);
  };
  return counts;
};

const counter = moneyCounter(10);
counter(); // valor 10
counter(); // valor 11

//Ejemplo 2
const moneyCounter = (i) => {
  let count = i;
  const counts = () => {
    count++;
    console.log(`valor $${count}`);
  };
  return counts;
};

const counter = moneyCounter(10);
counter(); // valor 11
counter(); // valor12
