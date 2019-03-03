import React from "react";
import renderer from "react-test-renderer";

import Link from "./Link";

describe("Link component", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<Link />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
