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

    //! Exact Match
    const helloWorldElement = screen.getByText('Hello World', {exact: false})
    expect(helloWorldElement).toBeInTheDocument()

    //! Not Exact Match
    const helloWorldElement2 = screen.getByText('Hello World!')
    expect(helloWorldElement2).toBeInTheDocument()

    // const helloWorldElement = screen.queryByText('Hello World')
    // expect(helloWorldElement).not.toBeInTheDocument();
})