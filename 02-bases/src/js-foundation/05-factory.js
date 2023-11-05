const buildMakePerson = ({ getAge, getUUID }) => {
  return ({ name, birthDate }) => {
    return {
      id: getUUID(),
      name,
      birthDate,
      age: getAge(birthDate)
    }
  }
}

module.exports = {
  buildMakePerson
}
