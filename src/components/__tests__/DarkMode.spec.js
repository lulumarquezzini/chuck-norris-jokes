import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import DarkMode from "../DarkMode.vue";

describe("MenuOptions", () => {
  it("renders properly", () => {
    const wrapper = mount(DarkMode);
    expect(wrapper.find("svg").exists()).toBeTruthy();
  });
});