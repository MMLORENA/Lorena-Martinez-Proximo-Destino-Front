import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given a component Button", () => {
  describe("When it receives a 'volver' text", () => {
    test("Then it should show a text 'volver' inside", () => {
      const expectedButtonText = "volver";

      render(
        <Button
          buttonText="volver"
          classNameTypeButton="small"
          actionOnclick={() => {}}
        ></Button>
      );

      const resultedButtonText = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(resultedButtonText).toBeInTheDocument();
    });
  });

  describe("When it receives an action and the user clicks on it", () => {
    test("Then it should invoke a function on Click", async () => {
      const mockAction = jest.fn();

      render(
        <Button
          buttonText=""
          classNameTypeButton="small"
          actionOnclick={mockAction}
        ></Button>
      );

      const button = screen.getByRole("button", { name: "" });
      await userEvent.click(button);

      expect(mockAction).toHaveBeenCalled();
    });
  });
});
