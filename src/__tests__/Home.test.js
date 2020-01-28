import React from "react";
import { shallow } from "enzyme";

import HomePage from "../components/Home/HomePage";
import AboutPage from "../components/About/AboutPage";
describe("<HomePage />", () => {
  describe("renders", () => {
    it("without crashing", () => {
      shallow(<HomePage />);
    });
  });
});

describe("<AboutPage />", () => {
  describe("renders", () => {
    it("without crashing", () => {
      shallow(<AboutPage />);
    });
  });
});
