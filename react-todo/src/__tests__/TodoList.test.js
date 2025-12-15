import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  
  // 1. Test Initial Render
  test('renders TodoList with initial todos', () => {
    render(<TodoList />);
    
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Master Jest')).toBeInTheDocument();
  });

  // 2. Test Adding a Todo
  test('adds a new todo', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo');
    const button = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Test Todo' } });
    fireEvent.click(button);

    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
  });

  // 3. Test Toggling a Todo (Fixed)
  test('toggles a todo item completion status', () => {
    render(<TodoList />);
    
    // 1. Find the clickable text
    const todoText = screen.getByText('Learn React');
    
    // 2. Find the parent <li> row where the 'line-through' style actually lives
    const todoRow = todoText.closest('li');
    
    // 3. Check Initial State (Should be 'none')
    expect(todoRow).toHaveStyle('text-decoration: none');

    // 4. Click the TEXT to toggle it
    fireEvent.click(todoText);

    // 5. Check New State (Should be 'line-through')
    expect(todoRow).toHaveStyle('text-decoration: line-through');
    
    // 6. Click again to untoggle (back to 'none')
    fireEvent.click(todoText);
    expect(todoRow).toHaveStyle('text-decoration: none');
  });

  // 4. Test Deleting a Todo
  test('deletes a todo item', () => {
    render(<TodoList />);
    
    const todoText = 'Build a Todo App';
    const todoItem = screen.getByText(todoText);
    

    const deleteButtons = screen.getAllByText('Delete');
    
    // Click the delete button for the second item ("Build a Todo App")
    fireEvent.click(deleteButtons[1]); 

    expect(screen.queryByText(todoText)).not.toBeInTheDocument();
  });
});