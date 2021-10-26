const villains = [
  {text: 'Freddy Kreuger', favorite: true, _id: 125223},
  {text: 'Chucky', favorite: true, _id: 127904},
  {text: 'Michael Myers', favorite: true, _id: 139608},
  {text: 'It', favorite: false, _id:111216}
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, villains)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

export { 
	find
}