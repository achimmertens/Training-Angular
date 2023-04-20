import { ComponentFixture, TestBed } from '@angular/core/testing'
import testBedConfiguration from 'src/app/testBedConfiguration'

import { ImpressPageComponent } from './impress-page.component'

describe('ImpressPageComponent', () => {
  let component: ImpressPageComponent
  let fixture: ComponentFixture<ImpressPageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule(
      testBedConfiguration
    ).compileComponents()

    fixture = TestBed.createComponent(ImpressPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
