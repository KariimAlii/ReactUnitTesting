import {render, screen} from "@testing-library/react";
import Async from "./Async.jsx";

describe('Async Component Test', () => {
    test('renders posts if request succeeds', async () => {
        //! Arrange (mock)
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: 1, title: 'Test Post' }],
        });

        render(<Async />);
        //! Act -> nothing to do
        //! Assert
        const listItemElements = await screen.findAllByRole('listitem') // https://www.w3.org/TR/html-aria/#docconformance
        expect(listItemElements).not.toHaveLength(0);

        //! The Test will fail
        //! why ? because screen.getAllByRole will instantly look for the listitem
        //! but it takes time to be here
        //!
        //! Solution: (find) returns a promise => will wait to the http request to succeed
        //! the default timeout is 1 second
    })
})