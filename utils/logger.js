// Fonctions de logging, avec date UTC ajoutée

const log = (...args) => {
    console.info(`[INFO][${new Date().toISOString().replace("T", " ").replace(/.[0-9]*Z/i, "")}]`, ...args)
}
  
const warn = (...args) => {
    console.warn(`[WARN][${new Date().toISOString().replace("T", " ").replace(/.[0-9]*Z/i, "")}]`, ...args)
}
  
const error = (...args) => {
    console.error(`[ERROR][${new Date().toISOString().replace("T", " ").replace(/.[0-9]*Z/i, "")}]`, ...args)
}

module.exports = { log, warn, error }