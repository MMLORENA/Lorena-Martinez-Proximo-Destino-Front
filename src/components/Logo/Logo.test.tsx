import { render, screen } from "@testing-library/react";
import Logo from "./Logo";
import userEvent from "@testing-library/user-event";
import * as router from "react-router";
import Wrapper from "../../test-utils/Wrapper";

const mockNavigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => mockNavigate);
});

describe("Given a Logo component", () => {
  describe("When it's render", () => {
    test("Then should show a image with the'logo próximo destino' inside", () => {
      render(<Logo />);

      const picture = screen.getByRole("heading");

      expect(picture).toBeInTheDocument();
    });
  });

  describe("And the user clicks on the logo", () => {
    test("Then should change the page", async () => {
      render(<Logo />, { wrapper: Wrapper });

      const resultLogo = screen.getByRole("heading");

      await userEvent.click(resultLogo);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
