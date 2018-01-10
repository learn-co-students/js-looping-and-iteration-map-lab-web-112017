// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase();
  })
}

function nameToAttributes(drivers) {
  let arrayOfArrays = [];
  drivers.forEach(function(driver) {
    arrayOfArrays.push(driver.split(" "))
  })
  return arrayOfArrays.map(function(nameArray) {
    return {firstName: nameArray[0], lastName: nameArray[1]}
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver[`name`]} is from ${driver[`hometown`]}`
  })
}
