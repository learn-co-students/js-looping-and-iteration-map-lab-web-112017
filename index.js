// Code your solution in this file.
function lowerCaseDrivers(drivers){
  let lowerDrivers = [];

  //do a map on each to push to new obj.
  drivers.map(function(driver){
    lowerDrivers.push(driver.toLowerCase())
  })

  return lowerDrivers;
};

function nameToAttributes(drivers){
  let driverObjs = [];

   drivers.map(function(driver){
    let a = {}
    let name_split = driver.split(' ')
    a.firstName= name_split[0]
    a.lastName= name_split[1]
    driverObjs.push(a)
  })

  return driverObjs;
};

function attributesToPhrase(drivers){
  return drivers.map(function(driver){
  return `${driver.name} is from ${driver.hometown}`
  })
}
