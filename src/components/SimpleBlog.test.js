import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import SimpleBlog from './SimpleBlog'

//Testing react with react-testing-library
test('renders content', () => {
    const blog = {
      title: 'Component testing is done with react-testing-library',
      author: 'test author',
      likes: 112233
    }
  
    const component = render(
      <SimpleBlog blog={blog} />
    )
  
    expect(component.container).toHaveTextContent(
      'Component testing is done with react-testing-library'
    )

    expect(component.container).toHaveTextContent(
        'test author'
      )

    
    expect(component.container).toHaveTextContent(
        112233
      )
  })

test('clicking like button twice calls the event handler twice', () => {
    const blog = {
        title: 'Component testing is done with react-testing-library',
        author: 'test author',
        likes: 0
      }

    const mockHandler = jest.fn()

    const { getByText } = render(
        <SimpleBlog blog={blog} onClick={mockHandler}/>
    )
    //Note the SimpleBlog has a <button onClick={onClick}>like</button> so you can get a reference to that
    //button with getByText('like')
    const button = getByText('like')
    //Simulate a user click the button twice
    fireEvent.click(button)
    fireEvent.click(button)

    expect(mockHandler.mock.calls.length).toBe(2)
})
  