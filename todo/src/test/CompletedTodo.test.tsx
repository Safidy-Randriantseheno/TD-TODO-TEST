import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import TodoApp from '../Todo';

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