import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

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

const testRecipes = [
  {
    id: 100,
    name: 'Schnitzel mit Pommes',
  },
  {
    id: 101,
    name: 'Knödel mit Kraut',
  },
]

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private statusSubject = new BehaviorSubject<
    'refreshing' | 'done' | 'unknown'
  >('unknown')
  public status$ = this.statusSubject.asObservable()

  private recipesSubject = new BehaviorSubject<Recipe[]>([])
  public recipes$ = this.recipesSubject.asObservable()

  constructor(private httpClient: HttpClient) {
    this.refresh()
  }

  getAll(): Recipe[] {
    return testRecipes
  }

  getAllObservable(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>('http://localhost:4000/recipes')
  }

  refresh() {
    this.statusSubject.next('refreshing')
    this.recipesSubject.next([])
    setTimeout(() => {
      this.httpClient
        .get<Recipe[]>('http://localhost:4000/recipes')
        .subscribe(list => {
          this.recipesSubject.next(list)
          this.statusSubject.next('done')
        })
    }, 400)
  }

  getById(id: number): Recipe | undefined {
    return testRecipes.find(recipe => recipe.id === id)
  }

  getById$(id: number): Observable<Recipe | undefined> {
    return this.httpClient.get<Recipe | undefined>(
      `http://localhost:4000/recipes/${id}`
    )
  }

  search(test: string): Recipe[] {
    return testRecipes.filter(recipe =>
      recipe.name.toLowerCase().includes(test.toLowerCase())
    )
  }

  add(recipe: Omit<Recipe, 'id'>) {
    // todo: maximum von id aus dem array plus 1
    testRecipes.push({ ...recipe, id: 1000 })
  }

  add$(recipe: Omit<Recipe, 'id'>) {
    // todo: maximum von id aus dem array plus 1
    return this.httpClient.post<Recipe>(
      `http://localhost:4000/recipes`,
      recipe,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }

  save(changedRecipe: Recipe) {
    const foundIndex = testRecipes.findIndex(
      recipe => recipe.id === changedRecipe.id
    )
    if (foundIndex < 0) {
      console.error('cannot save recipe', changedRecipe)
      return
    }
    testRecipes[foundIndex] = changedRecipe
  }
  saveOnBackend$(changedRecipe: Recipe): Observable<boolean> {
    return this.httpClient.put<boolean>(
      `http://localhost:4000/recipes/${changedRecipe.id}`,
      changedRecipe,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }
  nextId(recipe: Recipe) {
    const foundIndex = testRecipes.findIndex(r => r.id === recipe.id)
    if (foundIndex < testRecipes.length - 1) {
      return testRecipes[foundIndex + 1].id
    }
    return testRecipes[0].id
  }
}
