import { render, screen } from "@testing-library/react";
import Wrapper from "../../test-utils/Wrapper";
import DestinationCard from "./DestinationCard";

describe("Given a DestinationCard component", () => {
  describe("When it's render", () => {
    test("Then it should show 'Aventura' as heading", () => {
      const expectedText = "Aventura";

      render(
        <DestinationCard
          category="Aventura"
          firstPlan=""
          firstPlanDescription=""
        />,
        { wrapper: Wrapper }
      );

      const resultText = screen.getByRole("heading", { name: expectedText });

      expect(resultText).toBeInTheDocument();
    });

    test("Then should show a image with alt text 'adventure icon'", () => {
      const expectedText = "aventura icon";

      render(
        <DestinationCard
          category="aventura"
          firstPlan=""
          firstPlanDescription=""
        />,
        { wrapper: Wrapper }
      );

      const resultImage = screen.getByAltText(expectedText);

      expect(resultImage).toBeInTheDocument();
    });

    test("Then should show a list of plans", () => {
      render(
        <DestinationCard
          category="Aventura"
          firstPlan=""
          firstPlanDescription=""
        />,
        { wrapper: Wrapper }
      );

      const resultList = screen.getByRole("list");

      expect(resultList).toBeInTheDocument();
    });

    test("Then should show a description of first plan with text 'Trekking'", () => {
      render(
        <DestinationCard
          category="Aventura"
          firstPlan=""
          firstPlanDescription="Trekking"
        />,
        { wrapper: Wrapper }
      );

      const resultDescription = screen.getByText("Trekking");

      expect(resultDescription).toBeInTheDocument();
    });

    test("Then it should show a description of second &  third plan", () => {
      const expectThirdPlan = "Amazon";
      const expectSecondPlan = "Running";
      render(
        <DestinationCard
          category="Aventura"
          firstPlan=""
          firstPlanDescription=""
          secondPlan="Running"
          secondPlanDescription="Andes"
          thirdPlan="Amazon"
          thirdPlanDescription="kayak"
        />,
        { wrapper: Wrapper }
      );

      const resultSecondTitle = screen.getByRole("heading", {
        name: expectSecondPlan,
      });
      const resultThirdTitle = screen.getByRole("heading", {
        name: expectThirdPlan,
      });

      expect(resultSecondTitle).toBeInTheDocument();
      expect(resultThirdTitle).toBeInTheDocument();
    });
  });
});
