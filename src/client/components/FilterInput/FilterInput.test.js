import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import FilterInput from "./FilterInput";

afterEach(cleanup);

const defaultProps = {};

const setup = (props = defaultProps) => {
  return {
    props,
    render: render(<FilterInput {...props} />),
  };
};

describe("Header test suit", () => {
  it("Should render filter input", () => {
    const {
      render: { getByPlaceholderText },
    } = setup();

    expect(getByPlaceholderText("Search for a movie")).toBeTruthy();
  });

  it("Should change filter input", () => {
    const {
      render: { getByPlaceholderText },
    } = setup();
    const input = getByPlaceholderText("Search for a movie");
    fireEvent.change(input, {
      target: { value: "bad" },
    });
    expect(input.value).toEqual("bad");
  });
});
