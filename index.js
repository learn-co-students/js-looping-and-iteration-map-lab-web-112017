// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  const newArr = [];

  for (const driver of drivers) {
    newArr.push(driver.toLowerCase());
  };

  return newArr;
};

function nameToAttributes(drivers) {
  const list = [];
  drivers.map(function(driver) {
    const rDriver = {};
    rDriver['firstName'] = driver.split(" ")[0],
    rDriver['lastName'] = driver.split(" ")[1]
    list.push(rDriver)
  });
  return list;
};

function attributesToPhrase(drivers) {
  const result = [];
  drivers.map(function (driver) {
    result.push(`${driver['name']} is from ${driver['hometown']}`)
  });
  return result;
};
