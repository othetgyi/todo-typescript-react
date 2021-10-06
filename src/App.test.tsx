import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { TodoList } from "./TodoList";

describe("App", () => {
  test("should show todos", () => {
    render(<App />);
    screen.debug();
    expect(TodoList).toBeInTheDocument();
  });
});
