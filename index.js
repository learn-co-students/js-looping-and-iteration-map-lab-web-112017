function lowerCaseDrivers (array) {
  //returns everything in lowercase
  return array.map(function (driver) {return driver.toLowerCase()})
}


function nameToAttributes(driverNames) {
  return driverNames.map(function (driverName) {
    return {firstName: driverName.split(" ")[0], lastName: driverName.split(" ")[1]}}
  )
}

function attributesToPhrase (driverObjs) {
// returns a string saying `"<NAME OF DRIVER> is from <HOMETOWN>"`

  return driverObjs.map(function (driverObj) {
    return `${driverObj.name} is from ${driverObj.hometown}`
  })
}
