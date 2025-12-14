import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'

function addTodo(text) {
  const input = screen.getByLabelText(/todo-input/i)
  const form = screen.getByLabelText(/add-todo-form/i)
  fireEvent.change(input, { target: { value: text } })
  fireEvent.submit(form)
}

describe('TodoList', () => {
  test('renders initial todos', () => {
    render(<App />)

    expect(screen.getByText(/todo list/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/todo-list/i)).toBeInTheDocument()

    expect(screen.getByLabelText(/toggle-learn react/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/toggle-write tests/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/toggle-ship feature/i)).toBeInTheDocument()
  })

  test('adds a new todo', () => {
    render(<App />)
    addTodo('Review PRs')
    expect(screen.getByLabelText(/toggle-review prs/i)).toBeInTheDocument()
  })

  test('toggles a todo completed state', () => {
    render(<App />)

    const btn = screen.getByLabelText(/toggle-learn react/i)
    expect(btn).toHaveStyle({ textDecoration: 'none' })

    fireEvent.click(btn)
    expect(btn).toHaveStyle({ textDecoration: 'line-through' })

    fireEvent.click(btn)
    expect(btn).toHaveStyle({ textDecoration: 'none' })
  })

  test('deletes a todo', () => {
    render(<App />)

    const itemBtn = screen.getByLabelText(/toggle-ship feature/i)
    const delBtn = screen.getByLabelText(/delete-ship feature/i)
    fireEvent.click(delBtn)

    expect(itemBtn).not.toBeInTheDocument()
  })
})
