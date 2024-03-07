import { render } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  test('should render the footer', () => {
    render(<Footer />)
    // add a meaningful test to your footer functionality
    expect(true).toBeTruthy()
  })
})
