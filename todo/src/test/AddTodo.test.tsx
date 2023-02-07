import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import TodoApp from '../Todo';

it('adding  new todo', () => {
    const { getByPlaceholderText, getByText } = render(<TodoApp />);
    const input = getByPlaceholderText('Enter new task');  

    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.submit(form);

    const newTodo = getByText('Test Todo');

    expect(newTodo).toBeInTheDocument();
  });