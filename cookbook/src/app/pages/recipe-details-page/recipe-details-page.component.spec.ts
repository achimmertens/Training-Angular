import { ComponentFixture, TestBed } from '@angular/core/testing'
import testBedConfiguration from 'src/app/testBedConfiguration'

import { RecipeDetailsPageComponent } from './recipe-details-page.component'

describe('RecipeDetailsPageComponent', () => {
  let component: RecipeDetailsPageComponent
  let fixture: ComponentFixture<RecipeDetailsPageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule(
      testBedConfiguration
    ).compileComponents()

    fixture = TestBed.createComponent(RecipeDetailsPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
