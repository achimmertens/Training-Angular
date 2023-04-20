import { Component, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { Recipe, RecipesService } from 'src/app/services/recipes.service'

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css'],
})
export class RecipesPageComponent implements OnDestroy {
  recipes: Recipe[] = []
  // recipesServiceSubscription: Subscription
  constructor(private router: Router, protected recipesService: RecipesService) {
    // this.recipes = recipesService.getAll()
    // this.recipesServiceSubscription = recipesService.getAllObservable().subscribe({
    //   next: (list) => this.recipes = list,
    //   error: (err) => console.error(err),
    //   complete: () => console.log('recipes observable completed!')
    // })
  }

  ngOnDestroy(): void {
    // this.recipesServiceSubscription.unsubscribe()
  }

  handleNewClick() {
    this.router.navigateByUrl('rezepte/neu')
    // dont do: location.pathname = '/rezepte/neu'
  }

  handleChange(event: Event) {
    // @ts-ignore
    const searchString: string = event.target.value
    if (searchString.length > 0) {
      this.recipes = this.recipesService.search(searchString)
    } else {
      this.recipes = this.recipesService.getAll()
    }
  } 
}
