// const { emailTemplate } = require('./js-foundation/01-template')
// require('./js-foundation/02-destructuring')
// require('./js-foundation/04-arrow')
const { getAge, getUUID } = require('./plugins')
const { buildMakePerson } = require('./js-foundation/05-factory')
// import { getUserById } from './js-foundation/03-callbacks'
// const { getUserById } = require('./js-foundation/03-callbacks')

// const id = 2

// getUserById(id, (error, user) => {
//   if (error) throw new Error(error)

//   console.log({ user })
// })

// console.log(emailTemplate)

const makePerson = buildMakePerson({ getAge, getUUID })

const obj = { name: 'John', birthDate: '1990-01-01' }

const john = makePerson(obj)

console.log({ john })
