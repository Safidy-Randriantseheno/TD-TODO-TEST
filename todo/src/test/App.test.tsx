import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from '../App';

test('if the heading is correct', () => {
    render(<App />);
    const linkElement = screen.getByText(/Todo/i);
    expect(linkElement).toBeInTheDocument();
});
