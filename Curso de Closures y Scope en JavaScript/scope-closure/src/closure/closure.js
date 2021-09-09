const moneyBox = (coins) => {
  var saveCoins = 0;
  saveCoins += coins;
  console.log(`Money Box: $${saveCoins}`);
};

moneyBox(5);
moneyBox(10);
//Esto no nos genera un closure ya que no guarda el ambito

const moneyBoxClosure = () => {
  var saveCoins = 0;
  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(`Money Box: $${saveCoins}`);
  };
  return countCoins;
};

let MymoneyBox = moneyBoxClosure();

MymoneyBox(4);
MymoneyBox(6);
MymoneyBox(10);
//Esto si genera un closure ya que recuerda el ambito utilizando una funcion extra```
