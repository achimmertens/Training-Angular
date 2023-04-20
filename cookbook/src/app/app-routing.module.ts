import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router' // CLI imports router
import { HomePageComponent } from './pages/home-page/home-page.component'
import { ImpressPageComponent } from './pages/impress-page/impress-page.component'
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component'
import { RecipeDetailsPageComponent } from './pages/recipe-details-page/recipe-details-page.component'
import { RecipeNewPageComponent } from './pages/recipe-new-page/recipe-new-page.component'
import { RecipesPageComponent } from './pages/recipes-page/recipes-page.component'

const routes: Routes = [
  {
    path: 'rezepte/neu',
    component: RecipeNewPageComponent,
  },
  {
    path: 'rezepte/:id',
    component: RecipeDetailsPageComponent,
  },
  {
    path: 'rezepte',
    component: RecipesPageComponent,
  },
  {
    path: 'impressum',
    component: ImpressPageComponent,
  },
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
  // {}
] // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppRoutingModule {}
