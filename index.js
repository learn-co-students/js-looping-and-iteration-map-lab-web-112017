// Code your solution in this file.
function lowerCaseDrivers(collection) {
  newCollection = [];
  for (const driver of collection) {
    console.log(driver);
    newCollection.push(driver.toLowerCase());
  }
  return newCollection;
}

function nameToAttributes(collection) {
  newCollection = []
  for (const driver of collection) {
    obj = Object.assign({}, {firstName: driver.split(" ")[0]}, {lastName: driver.split(" ")[1]});
    newCollection.push(obj);
    console.log(newCollection);
  }
  return newCollection;
}

function attributesToPhrase(collection) {
  newCollection = []
  for (const driver of collection) {
    newCollection.push(`${driver.name} is from ${driver.hometown}`);
    console.log(driver);
  }
  return newCollection;
}
