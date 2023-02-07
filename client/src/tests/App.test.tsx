import React from 'react';
import { render, screen } from '@testing-library/react';
import { CoinflipPage } from '../components/CoinflipPage';
import { mount, shallow } from 'enzyme';
import { ResultPanel } from '../components/ResultPanel';

test('It properly renders the header', () => {
    render(<CoinflipPage />);
    expect(screen.getByText("Coinflip Game")).toBeInTheDocument();
});

describe('Form rendering', () => {
    it('renders the text input correctly', () => {
        render(<CoinflipPage />);
        expect(screen.getByPlaceholderText("Enter Number of Flips")).toBeInTheDocument();
    });

    it('renders the radio buttons correctly', () => {
        render(<CoinflipPage />);
        expect(screen.getByLabelText("Heads")).toBeInTheDocument();
        expect(screen.getByLabelText("Tails")).toBeInTheDocument();
    });

    it('renders the submit button correctly', () => {
        render(<CoinflipPage />);
        expect(screen.getByText("Flip the coin!")).toBeInTheDocument();
    });
});

// TODO: Figure out how to test components

// describe('User input', () => {
//     it('Should call setters when submitting form', () => {
//         const setFlips = jest.fn();
//         const page = mount(<CoinflipPage />);
//         const handleClick = jest.spyOn(React, 'useState');
//         handleClick.mockImplementation(flips => [flips, setFlips]);
//         page.setState({pageInteraction: true});
//         expect(page.find(ResultPanel))
//     });
// });