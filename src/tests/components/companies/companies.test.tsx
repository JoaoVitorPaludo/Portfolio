import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { CompaniesSlideTransition } from '../../../components/companies/styles'

describe('Companies component', () => {
  it('Should render the animations on the css', () => {
    render(<CompaniesSlideTransition $isActive={false} side="left" />)
  })
  it('Should render the animations on the css', () => {
    render(<CompaniesSlideTransition $isActive={true} side="left" />)
  })
})
