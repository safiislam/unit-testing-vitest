import { render, screen } from '@testing-library/react';
import App from './App';
import { expect, it } from 'vitest';

it('should have hello world',()=>{
    render(<App />)
    const message = screen.queryByText(/hello world/i)
    expect(message).toBeVisible()
})
it('should have kemon asen',()=>{
    render(<App />)
    const message = screen.queryByText(/kemon asen/i)
    expect(message).toBeVisible()
})