function lowerCaseDrivers(drivers) {
  const lower = drivers.map(function (driver) {
    return driver.toLowerCase();
  });
  return lower;
}

function nameToAttributes(drivers) {
  const full_name = drivers.map(function (driver) {
    let name = driver.split(' ');
    return { firstName: name[0], lastName: name[1]};
  });
  return full_name;
}
function attributesToPhrase(drivers) {
  const phrases = drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`
  });
  console.log(phrases)
  return phrases;
}
