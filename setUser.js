'use strict'


async function fetchUser(user) {
  user.findAll({}).then(async data => {
   if(!data.length) {
     const response = await fetch('https://fakestoreapi.com/users')
     const json = await response.json()
     user.bulkCreate(json.map((user)=>{
      const {name, ...userObject} = user 
      userObject.firstName = name.firstname
      userObject.lastName = name.lastname
      return userObject
     }))
       .then(()=>{
         console.log('added data to database')
         
       })
    } else {
      console.log('data already exist in database')
    }
  })}

module.exports = fetchUser