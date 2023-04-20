import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Recipe, RecipesService } from 'src/app/services/recipes.service'

@Component({
  selector: 'app-recipe-new-page',
  templateUrl: './recipe-new-page.component.html',
  styleUrls: ['./recipe-new-page.component.css'],
})
export class RecipeNewPageComponent {
  neuesRezept: Omit<Recipe, 'id'>

  constructor(private router: Router, private recipesService: RecipesService) {
    this.neuesRezept = { name: '' }
  }

  handleSave() {
    this.recipesService.add$(this.neuesRezept).subscribe(result => {
      this.router.navigateByUrl(`/rezepte/${result.id}?editmode`)
    })
  }

  handleCancel() {
    this.router.navigateByUrl('/rezepte')
  }
}
