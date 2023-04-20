import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/angular'
import { MichaelComponent } from './michael.component'

describe('MichaelComponent', () => {
  it('should create', async () => {
    await render(MichaelComponent)
    screen.logTestingPlaygroundURL()
    const headline = screen.getByRole('heading', { name: /michael h\. vogt/i })
    expect(headline).toBeVisible()
  })
})
