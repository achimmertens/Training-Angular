import { ComponentFixture, TestBed } from '@angular/core/testing'
import testBedConfiguration from 'src/app/testBedConfiguration'

import { RecipeNewPageComponent } from './recipe-new-page.component'

describe('RecipeNewPageComponent', () => {
  let component: RecipeNewPageComponent
  let fixture: ComponentFixture<RecipeNewPageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule(
      testBedConfiguration
    ).compileComponents()

    fixture = TestBed.createComponent(RecipeNewPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
