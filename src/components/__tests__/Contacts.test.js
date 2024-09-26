import Contacts from "../Contacts";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Should load contact us component",()=>{

    render(<Contacts/>);
    const heading=screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})