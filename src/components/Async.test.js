import {render, screen} from "@testing-library/react";
import Async from "./Async.jsx";

describe('Async Component Test', () => {
    test('renders posts if request succeeds', () => {
        //! Arrange
        render(<Async />);
        //! Act -> nothing to do
        //! Assert
        const listItemElements = screen.getAllByRole('listitem') // https://www.w3.org/TR/html-aria/#docconformance
        expect(listItemElements).not.toHaveLength(0);

        //! The Test will fail
        //! why ? because screen.getAllByRole will instantly look for the listitem
        //! but it takes time to be here
    })
})