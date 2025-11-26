import {render, screen} from "@testing-library/react";
import Greeting from "./Greeting.jsx";
import '@testing-library/jest-dom';

test('renders Hello World as a text', () => {
    //! Arrange
    render(<Greeting />)

    //! Act

    //! Assert

    //! screen.get()    ==> will throw error if element is not found
    //! screen.find()   ==> return a promise
    //! screen.query()  ==> will not throw error if element is not found
    const helloWorldElement = screen.getByText('Hello World!')
    expect(helloWorldElement).toBeInTheDocument()
})