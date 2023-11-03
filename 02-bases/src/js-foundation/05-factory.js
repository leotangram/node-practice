const { getAge, getUUID } = require('../plugins')

const buildPerson = ({ name, birthdate }) => {
  return {
    id: getUUID(),
    name,
    birthdate,
    age: getAge(birthdate)
  }
}

const obj = {
  name: 'John',
  birthdate: '1992-09-15'
}

const john = buildPerson(obj)

console.log({ john })
