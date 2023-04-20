import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription, switchMap } from 'rxjs'
import { Recipe, RecipesService } from 'src/app/services/recipes.service'

@Component({
  selector: 'app-recipe-details-page',
  templateUrl: './recipe-details-page.component.html',
  styleUrls: ['./recipe-details-page.component.css'],
})
export class RecipeDetailsPageComponent implements OnInit, OnDestroy {
  editMode = false
  saveDisabled = true
  recipe: Recipe | undefined
  recipeFormGroup: FormGroup

  queryParamsSubscription: Subscription | undefined
  paramsSubscription: Subscription | undefined
  formStatusSubscription: Subscription | undefined

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipesService: RecipesService,
    private formBuilder: FormBuilder
  ) {
    this.recipeFormGroup = formBuilder.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(3)]],
      instructions: [''],
      ingredients: formBuilder.array([]),
    })
  }
  get ingredients() {
    return this.recipeFormGroup.get('ingredients') as FormArray
  }

  handleAddIngredient() {
    this.ingredients.push(
      this.formBuilder.group({
        name: ['', [Validators.required]],
        amount: [''],
      })
    )
  }

  ngOnInit(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      queryParams => {
        this.editMode =
          Object.keys(queryParams).findIndex(param => param === 'editmode') > -1
      }
    )

    // this.paramsSubscription = this.route.params.subscribe(params => {
    //   const id = +params['id']
    //   this.recipe = this.recipesService.getById(id)
    //   this.recipeFormGroup.patchValue(this.recipe || {})
    // })

    this.paramsSubscription = this.route.params
      .pipe(switchMap(params => this.recipesService.getById$(+params['id'])))
      .subscribe(recipe => {
        this.recipe = recipe
        this.recipeFormGroup.patchValue(this.recipe || {})
        this.ingredients.clear()
        recipe?.ingredients?.forEach(ingredient => {
          this.ingredients.push(
            this.formBuilder.group({
              name: [ingredient.name, [Validators.required]],
              amount: [ingredient.amount],
            })
          )
        })
      })

    this.formStatusSubscription = this.recipeFormGroup.statusChanges.subscribe(
      status => {
        this.saveDisabled = status !== 'VALID'
      }
    )
  }
  ngOnDestroy(): void {
    this.queryParamsSubscription?.unsubscribe()
    this.paramsSubscription?.unsubscribe()
    this.formStatusSubscription?.unsubscribe()
  }

  handleEditClick() {
    this.router.navigateByUrl(
      `rezepte/${this.recipeFormGroup.value.id}?editmode`
    )
  }
  handleSaveClick() {
    this.recipesService
      .saveOnBackend$(this.recipeFormGroup.value)
      .subscribe(result => console.log(result))
    this.recipe = this.recipeFormGroup.value
    this.router.navigateByUrl(`rezepte/${this.recipeFormGroup.value.id}`)
  }
  handleNext() {
    if (this.recipe) {
      const nextId = this.recipesService.nextId(this.recipe)
      this.router.navigateByUrl(`rezepte/${nextId}`)
    }
  }
}
