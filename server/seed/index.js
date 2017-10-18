const {sequelize, Recipe, User} = require('../src/models')
const Promise = require('bluebird')
const recipes = require('./recipes.json')
const users = require('./users.json')

sequelize.sync({force: true})
.then(async function (){
    await Promise.all(
        users.map( user => {
            User.create(user)
        })
    )
    await Promise.all(
        recipes.map(recipe=>{
            Recipe.create(recipe)
        })
    )
})
