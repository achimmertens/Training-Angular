import { ComponentFixture, TestBed } from '@angular/core/testing'
import testBedConfiguration from 'src/app/testBedConfiguration'

import { RecipesPageComponent } from './recipes-page.component'

describe('RecipesPageComponent', () => {
  let component: RecipesPageComponent
  let fixture: ComponentFixture<RecipesPageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule(
      testBedConfiguration
    ).compileComponents()

    fixture = TestBed.createComponent(RecipesPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
