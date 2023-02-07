import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
test('typing into input and displaying todo', () => {
    render(<App />);
    const  inputElement = screen.getByPlaceholderText(/Enter new task/i)
    fireEvent.change(inputElement, { target: { value: 'safidy' } });
});

