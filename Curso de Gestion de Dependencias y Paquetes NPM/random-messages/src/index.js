const messages = [
  "Karla solo me siento bien cuando hablo contigo",
  "No eres Google pero tienes todo lo que busco",
  "Que lo que tenga que pasar pase contigo",
  "Eres la niña de mis ojos",
  "Hermosa",
  "Te amo",
  "Juntos por siempre",
  "Mi amor",
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMsg };
