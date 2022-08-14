import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import CategoryOptions from "../CategoryOptions.vue";

describe("MenuOptions", () => {
  it("renders properly", () => {
    const wrapper = mount(CategoryOptions, {
      propsData: {
        selected: "category",
        lucky: "false",
      },
    });
    expect(wrapper.find("p").exists()).toBeTruthy();
  });
});
