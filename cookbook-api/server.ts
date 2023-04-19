import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { addItem, Recipe, deleteIndex, getList } from './store'

const PORT = 4000
const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/recipes', (req, res) => {
  res.send(getList())
})

app.post('/recipes', (req, res) => {
  const newRecipe = req.body
  console.log(req.body)
  newRecipe.id = getList().length + 1
  addItem(newRecipe)
  res.send(newRecipe)
})

app.put('/recipes/:id', (req, res) => {
  const recipe = req.body as Recipe
  const recipeId = +req.params['id']
  const foundItem = getList().find((item) => item.id === recipeId)
  if (!foundItem) {
    res.sendStatus(404)
  } else {
    foundItem.name = recipe.name
    foundItem.instructions = recipe.instructions
    res.send(true)
  }
})

// @ts-ignore
app.delete('/recipes/:id', (req, res) => {
  const recipeId = +req.params['id']
  const foundIndex = getList().findIndex((item) => item.id === recipeId)
  if (foundIndex < 0) {
    res.sendStatus(404)
  } else {
    deleteIndex(foundIndex)
    res.sendStatus(204)
  }
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
