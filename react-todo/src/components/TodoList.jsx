import { useState } from 'react';
import AddTodoForm from './AddTodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Master Jest', completed: false },
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Todo List</h1>
      <AddTodoForm addTodo={addTodo} />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            data-testid="todo-item"
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '10px',
              borderBottom: '1px solid #ccc',
              paddingBottom: '5px'
            }}
          >
            <span 
              onClick={() => toggleTodo(todo.id)}
              style={{ flexGrow: 1 }}
            >
              {todo.text}
            </span>
            <button 
              onClick={(e) => {
                e.stopPropagation(); // Prevent toggling when deleting
                deleteTodo(todo.id);
              }}
              style={{ marginLeft: '10px', color: 'red' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;