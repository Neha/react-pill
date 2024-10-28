// src/components/MyComponent.test.tsx
import { render, screen } from "@testing-library/react";
import Pill, { PillType } from "./Pill";

const mockPill1: PillType = {
  label: "Test",
  bgcolor: "lime",
};

test("renders the component", () => {
  render(<Pill data={[mockPill1]} />);
  const element = screen.getByRole("button");
  expect(element).toBeInTheDocument();
});
