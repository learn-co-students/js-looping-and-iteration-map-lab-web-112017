// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function (name) {return name.toLowerCase()})
}

function nameToAttributes(drivers) {
  return drivers.map(function (name) {
    const begName = name.split(' ')[0];
    const endName = name.split(' ')[1];
    return {firstName: begName, lastName: endName}
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function (person) {
    return `${person.name} is from ${person.hometown}`;
  });
}
