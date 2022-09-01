import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";
import { ThemeProvider } from "styled-components";
import styledMainTheme from "../../styledMainTheme";

describe("Given a component Button", () => {
  describe("When it receives a 'volver' text", () => {
    test("Then it should show a text 'volver' inside", () => {
      const expectedButtonText = "volver";

      render(
        <Button
          buttonText="volver"
          classNameTypeButton="small"
          actionOnclick={() => {}}
          type="button"
          isDisabled={true}
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
        <>
          <ThemeProvider theme={styledMainTheme}>
            <Button
              buttonText=""
              classNameTypeButton="small"
              actionOnclick={mockAction}
              type="button"
              isDisabled={false}
            ></Button>
          </ThemeProvider>
        </>
      );

      const button = screen.getByRole("button", { name: "" });
      await userEvent.click(button);

      expect(mockAction).toHaveBeenCalled();
    });
  });
});
