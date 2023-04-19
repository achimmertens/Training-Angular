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

export const getItem = (id: number) =>
  recipes.find((recipe) => recipe.id === id)

export const addItem = (newItem: Recipe) => {
  recipes.push(newItem)
  return recipes
}
