import { useState } from 'react'
import AddTodoForm from './AddTodoForm'

const initialTodos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Write tests', completed: true },
  { id: 3, text: 'Ship feature', completed: false },
]

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos)

  function addTodo(text) {
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text, completed: false },
    ])
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    )
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAdd={addTodo} />
      <ul aria-label="todo-list">
        {todos.map((t) => (
          <li key={t.id}>
            <button
              aria-label={`toggle-${t.text}`}
              onClick={() => toggleTodo(t.id)}
              style={{
                textDecoration: t.completed ? 'line-through' : 'none',
                background: 'transparent',
                border: 'none',
                padding: 0,
                cursor: 'pointer'
              }}
            >
              {t.text}
            </button>
            <button
              aria-label={`delete-${t.text}`}
              onClick={() => deleteTodo(t.id)}
              style={{ marginLeft: 8 }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
