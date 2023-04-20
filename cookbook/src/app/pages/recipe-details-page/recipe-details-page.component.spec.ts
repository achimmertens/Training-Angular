import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/angular'

import testBedConfiguration from '../../testBedConfiguration'

describe('RecipeDetailsPageComponent', () => {
  it.only('should create', async () => {
    await render('<app-recipe-details-page></app-recipe-details-page>', {
      ...testBedConfiguration,
    })
    screen.logTestingPlaygroundURL()
    const nextButton = screen.getByRole('button', { name: /nächstes rezept/i })
    expect(nextButton).toBeEnabled()
  })
})
