// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase();
  })
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver)  {
    driver_arr = driver.split(' ');
    return {firstName: driver_arr[0], lastName: driver_arr[1]}
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return driver.name + " is from " + driver.hometown;
  })
}
