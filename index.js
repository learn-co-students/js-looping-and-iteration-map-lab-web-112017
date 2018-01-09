function lowerCaseDrivers(drivers) {
  const lowerCds = drivers.map(function(driver) {
    return driver.toLowerCase();
  });
  return lowerCds;
}
// this function takes an array of drivers, and returns an array of the drivers names in lowercase.

function nameToAttributes(drivers) {
  const attribs = drivers.map(function(driver) {
    let arr = driver.split(" ");
    return { firstName: arr[0], lastName: arr[1] };
  });
  return attribs;
} 
// this function takes an array of drivers with their first and last name separated by a space, and returns an array of JavaScript objects with firstName and lastName attributes.

function attributesToPhrase() {
  const attribs = drivers.map(function(driver) {
    return driver.name + " is from " + driver.hometown;
  });
  return attribs;
}

function attributesToPhrase(drivers) {
  const attribs = drivers.map(function(d) {
    return d.name + " is from " + d.hometown;
  });
  return attribs;
}
// this function takes an array of drivers as JavaScript objects and returns a string saying "<NAME OF DRIVER> is from <HOMETOWN>" for each JavaScript object in the array. Note that between the < and > we are looking for the value stored in the name and hometown object attributes, not the strings "DRIVER" or "HOMETOWN"
