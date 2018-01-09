// Code your solution in this file.
function lowerCaseDrivers (array) {
  return array.map(function (name) {
    return name.toLowerCase();
  })
}

function nameToAttributes (array) {
  return array.map(function (name) {
    name_array = name.split(" ")
    return Object.assign({}, {firstName: `${name_array[0]}`, lastName: `${name_array[1]}`});
  })
}

function attributesToPhrase (array) {
  return array.map (function (obj) {
    return `${obj.name} is from ${obj.hometown}`;
  })
}
