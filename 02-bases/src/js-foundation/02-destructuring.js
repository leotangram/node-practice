console.log(process.env.PORT ?? 3000)

const { SHELL, HOMEBREW_PREFIX, npm_lifecycle_script } = process.env

// console.table({ SHELL, HOMEBREW_PREFIX, npm_lifecycle_script })

const characters = ['Flash', 'Superman', 'Batman']

const [, , batman] = characters

// console.log(batman)
