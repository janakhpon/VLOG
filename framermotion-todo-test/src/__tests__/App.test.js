import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "../App";

test("textarea should be in DOM", () => {
    render(<App />);
    const textboxElement = screen.getByRole("textbox");
    expect(textboxElement).toBeInTheDocument();
});

test("Task list should be in DOM", () => {
    render(<App />);
    const taskListElement = screen.getByRole("list");
    expect(taskListElement).toBeInTheDocument();
});

test("Task list should have 4 list items", () => {
    render(<App />);
    const taskListElement = screen.getByRole("list");
    const { getAllByRole } = within(taskListElement);
    const items = getAllByRole("listitem");
    expect(items.length).toBe(4);
});


test("Task list length should be increased after textarea form submit", () => {
    render(<App />);
    const textboxElement = screen.getByRole("textbox");
    fireEvent.focus(textboxElement);
    fireEvent.change(textboxElement, {
        target: { value: "Hello World" },
    });
    fireEvent.keyDown(textboxElement, {
        key: "Enter",
        code: "Enter",
        keyCode: 13,
        charCode: 13
    });
    const taskListElement = screen.getByRole("list");
    const { getAllByRole } = within(taskListElement);
    const items = getAllByRole("listitem");
    expect(items.length).toBe(5);
    const addedItemHeading = screen.getByRole('heading', { name: /hello world/i });
    expect(addedItemHeading).toBeInTheDocument();
});


test("Task list length should be decreased after clicked delete button", () => {
    render(<App />);
    const buttonElement = screen.getByTestId('itemButton0');
    fireEvent.click(buttonElement);
    const taskListElement = screen.getByRole("list");
    const { getAllByRole } = within(taskListElement);
    const items = getAllByRole("listitem");
    expect(items.length).toBe(4);
});

test("Container with 4 items snapshot", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
});