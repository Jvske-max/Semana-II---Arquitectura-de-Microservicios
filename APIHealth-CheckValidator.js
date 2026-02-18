const checkServiceHealth = (latencia, usoCpu, estadoDb) => {
   return latencia < 200 && usoCpu < 80 && estadoDb === true;
};

console.log(checkServiceHealth(150, 45, true));