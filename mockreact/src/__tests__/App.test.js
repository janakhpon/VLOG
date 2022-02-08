import {
  fireEvent,
  render,
  screen,
  within,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("App Component", () => {
  test("TaskList should be in DOM", async () => {
    render(<App />);
    const taskListElement = screen.getByRole("list");
    await waitFor(() => expect(taskListElement).toBeInTheDocument());
  });

  test("Task list should have 2 list items", async () => {
    render(<App />);
    const taskListElement = screen.getByRole("list");
    const { getAllByRole } = within(taskListElement);
    await waitFor(() => expect(getAllByRole("listitem").length).toBe(2));
  });

  test("Newly added task should be in the TaskList", async () => {
    render(<App />);
    const textboxElement = screen.getByRole("textbox");

    userEvent.type(textboxElement, "testing text");
    expect(textboxElement).toHaveDisplayValue("testing text");

    fireEvent.keyDown(textboxElement, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13,
    });
    const taskListElement = screen.getByRole("list");
    const { getAllByRole } = within(taskListElement);
    await waitFor(() => expect(getAllByRole("listitem").length).toBe(1));
    const addedItemHeading = screen.getByRole("heading", {
      name: /testing text/i,
    });
    expect(addedItemHeading).toBeInTheDocument();
  });

  test("TaskList should be decreased after clicking delete button", async () => {
    render(<App />);
    const taskListElement = screen.getByRole("list");
    const { getAllByRole } = within(taskListElement);
    await waitFor(() => expect(getAllByRole("listitem").length).toBe(2));

    const deleteButton = screen.getByTestId("deleteButton0");
    expect(deleteButton).toBeInTheDocument();
    userEvent.click(deleteButton);

    await waitFor(() => expect(getAllByRole("listitem").length).toBe(1));
  });

  test("Task Item should be updated after clicking complete button", async () => {
    render(<App />);
    const completeButton = await screen.findByTestId("completeButton0");
    expect(completeButton).toBeInTheDocument();
    userEvent.click(completeButton);

    expect(await screen.findByText("Completed")).toBeInTheDocument();
    expect(await screen.findByTestId("listItemCompleted0")).toHaveTextContent(
      "Completed"
    );
  });
});
