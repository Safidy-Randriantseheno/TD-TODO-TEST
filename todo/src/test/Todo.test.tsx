import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import TodoApp from '../Todo';
import App from '../App';

test('typing into input and displaying todo', () => {
    render(<App />);
    const  inputElement = screen.getByPlaceholderText(/Enter new task/i)
    fireEvent.change(inputElement, { target: { value: 'safidy' } });
});

  it('renders correctly', () => {
    const  Placeholder  = render(<TodoApp />);
    const input = Placeholder.getByPlaceholderText('Enter new task');

    expect(input).toMatchSnapshot();
  });
  it('renders correctly', () => {
    const  Todo  = render(<TodoApp />);
    const todoHeading = Todo.getByText('TODO');

    expect(todoHeading).toMatchSnapshot();
  });
  it('renders correctly', () => {
    const  Done  = render(<TodoApp />);
    const doneHeading = Done.getByText('DONE');

    expect(doneHeading).toMatchSnapshot();
  });
  
  
  it('adding  new todo', () => {
    const { getByPlaceholderText, getByText } = render(<TodoApp />);
    const input = getByPlaceholderText('Enter new task');  

    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.submit(form);

    const newTodo = getByText('Test Todo');

    expect(newTodo).toBeInTheDocument();
  });
  it('todo completed', () => {
    const { getByPlaceholderText, getByText } = render(<TodoApp />);
    const input = getByPlaceholderText('Enter new task');
  
    const todoHeading = getByText('TODO');
    const doneHeading = getByText('DONE');

    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.submit(form);

    const newTodo = getByText('Test Todo');
    const checkbox = newTodo.previousSibling;

    fireEvent.click(checkbox);

    expect(newTodo).not.toBeInTheDocument();
    expect(doneHeading).toBeInTheDocument();
    expect(todoHeading).toBeInTheDocument();
  });
 