import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import Usage from '../exercises-final/04A'
// import Usage from '../exercises/04A'

afterEach(() => {
  window.localStorage.removeItem('count')
})

test('Usage works', async () => {
  const mockSuccessResponse = {name: 'Charizard'}
  const mockJsonPromise = Promise.resolve(mockSuccessResponse)
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  })
  jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise)
  const {container, findByText} = render(<Usage />)
  const button = container.getElementsByTagName('button')[0]
  expect(button).toHaveTextContent(/0/)
  fireEvent.click(button)

  expect(button).toHaveTextContent(/1/)
  await findByText('Charizard')

  fireEvent.click(button)
  expect(button).toHaveTextContent(/2/)
  await findByText('Charizard')
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=modern%20react&e=04&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
