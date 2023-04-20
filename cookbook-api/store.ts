export interface Ingredient {
  name: string
  amount?: string
}

export interface Recipe {
  id: number
  name: string
  instructions?: string
  ingredients?: Ingredient[]
}

let recipes: Recipe[] = [
  {
    id: 1,
    name: 'Leckeres Dal',
    instructions: 'bla bla',
  },
  {
    id: 2,
    name: 'Fischstäbchen',
  },
]

export const deleteIndex = (index: number) => {
  recipes.splice(index, 1)
}

export const getList = () => recipes

export const getItem = (id: number) => {
  const foundItem = recipes.find((recipe) => recipe.id === id)
  console.log(JSON.stringify(foundItem, null, 2))
  return foundItem
}

export const addItem = (newItem: Recipe) => {
  recipes.push(newItem)
  return recipes
}
