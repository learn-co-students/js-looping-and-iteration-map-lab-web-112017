// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(
    function (driver) {
      return driver.toLowerCase()
    }
  )
}

function nameToAttributes(drivers) {
  return drivers.map(
    function(driver) {
      splitDriver = driver.split(" ");
      return {firstName: splitDriver[0], lastName: splitDriver[1]};
    }
  )
}

function attributesToPhrase(drivers) {
  return drivers.map (
    function (driver) {
      return `${driver.name} is from ${driver.hometown}`
    }
  )
}
