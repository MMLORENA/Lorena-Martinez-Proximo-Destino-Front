import { render, screen } from "@testing-library/react";
import Wrapper from "../../test-utils/Wrapper";
import DestinationSimpleCard from "./DestinationSimpleCard";

describe("Given a DestinationSimpleCard component", () => {
  describe("When its instanciated", () => {
    describe("And receives a type 'welcome' & 'Mar' text", () => {
      test("Then it should show 'Mountainr' as image heading", () => {
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
          <DestinationSimpleCard id="" picture="./Mountain" title="Mountain" />,
          {
            wrapper: Wrapper,
          }
        );

        const icon = screen.getByTestId(iconId);

        expect(icon).toBeInTheDocument();
      });
    });
  });
});
