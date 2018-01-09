// Code your solution in this file.
function lowerCaseDrivers(array) {
  const newArray = array.map(function (driver) {
    return driver.toLowerCase();
  })
  return newArray
}

function nameToAttributes(array) {
  const newArray = array.map(function (driver) {
    return Object.assign({}, { firstName: driver.split(" ")[0], lastName: driver.split(" ")[1] });
  })
  return newArray
}

function attributesToPhrase(array) {
  const newArray = array.map(function (driver) {
    return `${driver['name']} is from ${driver['hometown']}`
  })
  return newArray
}
