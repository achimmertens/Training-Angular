import { Component } from '@angular/core'
import { RecipesService } from './services/recipes.service'

@Component({
  selector: 'app-root', // <app-root></app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cookbook'
  constructor(protected recipesService: RecipesService) {}
}
