import { TestBed } from '@angular/core/testing'
import testBedConfiguration from '../testBedConfiguration'

import { RecipesService } from './recipes.service'

describe('RecipesService', () => {
  let service: RecipesService

  beforeEach(() => {
    TestBed.configureTestingModule(testBedConfiguration)

    service = TestBed.inject(RecipesService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
