// Code your solution in this file.
function lowerCaseDrivers (drivers) {
  return (drivers.map( function (person) {
    return person.toLowerCase();
  }))
}

function nameToAttributes (drivers) {
  return (drivers.map( function (person){
    const first = person.split(" ")[0];
    const last = person.split(" ")[1];
    return {firstName: first, lastName: last};
  }))
}

function attributesToPhrase(drivers) {
  return drivers.map(function (person){
    return `${person.name} is from ${person.hometown}`;
  })
}
