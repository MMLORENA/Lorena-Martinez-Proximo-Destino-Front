import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Wrapper from "../../test-utils/Wrapper";
import DestinationSimpleCard from "./DestinationSimpleCard";

let mockDelete = {
  deleteDestinations: jest.fn(),
};

jest.mock(
  "../../store/hooks/useDestinations/useDestinations",
  () => () => mockDelete
);

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a DestinationSimpleCard component", () => {
  describe("When its instanciated", () => {
    describe("And receives a title 'Mountain'", () => {
      test("Then it should show 'Mountain' as image heading", () => {
        const expectedText = "Mountain";
        render(<DestinationSimpleCard id="" picture="" title="Mountain" />, {
          wrapper: Wrapper,
        });

        const title = screen.getByRole("heading", { name: expectedText });

        expect(title).toBeInTheDocument();
      });

      test("Then it should show a image with an alt text 'Mountain'", () => {
        const expectedText = "Mountain";
        render(
          <DestinationSimpleCard id="" picture="./Mountain" title="Mountain" />,
          {
            wrapper: Wrapper,
          }
        );

        const image = screen.getByAltText(expectedText);

        expect(image).toBeInTheDocument();
      });

      test("Then it should show a trash icon", async () => {
        const iconId = "icon-trash";

        render(
          <DestinationSimpleCard
            id="1"
            picture="./Mountain"
            title="Mountain"
          />,
          {
            wrapper: Wrapper,
          }
        );

        const icon = screen.getByTestId(iconId);

        expect(icon).toBeInTheDocument();
      });
    });

    describe("And the user clicks on the trash of the 'Mountain' destination", () => {
      test("Then it should not to show the 'Mountain' card", async () => {
        const iconId = "icon-trash";

        render(
          <DestinationSimpleCard id="" picture="./Mountain" title="Mountain" />,
          {
            wrapper: Wrapper,
          }
        );

        const icon: HTMLElement = screen.getByTestId(iconId);
        await userEvent.click(icon);

        expect(mockDelete.deleteDestinations).toHaveBeenCalled();
      });
    });
  });
});
