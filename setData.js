'use strict'


async function fetchData(product) {
  product.findAll({}).then(async data => {
   if(!data.length) {
     const response = await fetch('https://fakestoreapi.com/products')
     const json = await response.json()
     product.bulkCreate(json)
       .then(()=>{
         console.log('added data to database')
       })
    } else {
      console.log('data already exist in database')
    }
  })}

module.exports = fetchData