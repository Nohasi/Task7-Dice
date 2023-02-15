import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { DicePage } from "../components/DicePage";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import { DiceForm } from "../components/DiceForm"

configure({adapter: new Adapter()});
test('it properly renders the header', () => {
    render(<DicePage/>);
    expect(screen.getByText("🎲 Dice Roll Game 🎲")).toBeInTheDocument();
});

describe('Form rendering',() => {
    it('renders the dropdown lists', () => {
        render(<DicePage/>);
        const dice = screen.getByLabelText('Dice');
        const throws = screen.getByLabelText('Throws');
        const players = screen.getByLabelText('Players');

        expect(dice).toBeInTheDocument();
        expect(throws).toBeInTheDocument();
        expect(players).toBeInTheDocument();
    });

    it('renders the submit button correct', () => {
        render(<DicePage/>);
        expect(screen.getByText('Play!')).toBeInTheDocument();
    });
});

describe('Updating states', () => {
    it('Should update pageInteraction state properly', () => {
        
    });
});