//CLOSURES QUE RETORNAN OBJETOS
const person = () => {
  let saveName = "Name:"; // saveName es totalmente privado
  return {
    getName: () => saveName,
    setName: (name) => {
      saveName = name;
    },
  };
};

const newPerson = person();
console.log(newPerson.getName());
newPerson.setName("Victor");
console.log(newPerson.getName());
