// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase())
}


function nameToAttributes(names) {
  return names.map( function (name) {
    let first = name.split(" ")[0]
    let last = name.split(" ")[1]
    return Object.assign({},{'firstName': first, 'lastName': last})
  })
}

function attributesToPhrase(attributes) {
  return attributes.map( function (attribute) {
    return `${attribute.name} is from ${attribute.hometown}`
  })
}
