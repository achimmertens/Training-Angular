import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { MichaelComponent } from './components/michael/michael.component'
import { PersonComponent } from './components/person/person.component'
import { DeleteButtonComponent } from './components/delete-button/delete-button.component'
import { AppRoutingModule } from './app-routing.module'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { ImpressPageComponent } from './pages/impress-page/impress-page.component'
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component'
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component'
import { RecipesPageComponent } from './pages/recipes-page/recipes-page.component';
import { RecipeDetailsPageComponent } from './pages/recipe-details-page/recipe-details-page.component';
import { RecipeNewPageComponent } from './pages/recipe-new-page/recipe-new-page.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
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
    RecipeNewPageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
