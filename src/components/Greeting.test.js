import {render, screen} from "@testing-library/react";
import Greeting from "./Greeting.jsx";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";



//! A Test Suite is a group of tests combined together
//! Here we have multiple tests inside a test suite
describe('Greeting User Feature', () => {

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

    test('Renders good to see you if the button was NOT Clicked', () => {
        //! Arrange
        render(<Greeting />)
        //! Act --> nothing to do
        //! Assert
        const outputElement = screen.getByText('good to see you', {exact: false})
        expect(outputElement).toBeInTheDocument();
    })

    test('Renders Changed! if the button was Clicked', async () => {
        //! Arrange
        render(<Greeting />)
        //! Act => click the button
        const buttonElement = screen.getByRole('button')
        // userEvent.click(buttonElement)
        const user = userEvent.setup();
        await user.click(buttonElement);
        //! Assert
        const outputElement = screen.getByText('Changed', {exact: false})
        expect(outputElement).toBeInTheDocument();
    })
})


//! Notes : To integrate jest with your environment
//!======================================================

//! (1)Enable Jest in WebStorm
//!==============================
//! WebStorm → Settings → Languages & Frameworks → JavaScript → Libraries
//! Click Download…
//! Search for “jest”
//! Install the Jest type definitions (@types/jest)

//! (2) Install Jest type definitions
//!=======================================
//! npm install --save-dev @types/jest

//! (3) Add Jest globals to ESLint
//!===================================
//! in (eslint.config.js)

//! globals: {
//!     ...globals.browser,
//!     ...globals.jest
//!  }
