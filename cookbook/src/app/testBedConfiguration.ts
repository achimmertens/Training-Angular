import { HttpClientModule } from '@angular/common/http'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DeleteButtonComponent } from './components/delete-button/delete-button.component'
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component'
import { MichaelComponent } from './components/michael/michael.component'
import { PersonComponent } from './components/person/person.component'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { ImpressPageComponent } from './pages/impress-page/impress-page.component'
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component'
import { RecipeDetailsPageComponent } from './pages/recipe-details-page/recipe-details-page.component'
import { RecipeNewPageComponent } from './pages/recipe-new-page/recipe-new-page.component'
import { RecipesPageComponent } from './pages/recipes-page/recipes-page.component'

export default {
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    MichaelComponent,
    PersonComponent,
    DeleteButtonComponent,
    HomePageComponent,
    ImpressPageComponent,
    NotFoundPageComponent,
    MainNavigationComponent,
    RecipesPageComponent,
    RecipeDetailsPageComponent,
    RecipeNewPageComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
}
