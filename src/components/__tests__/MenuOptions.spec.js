import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MenuOptions from "../MenuOptions.vue";

describe("MenuOptions", () => {
  it("renders properly", () => {
    const wrapper = mount(MenuOptions, {
        propsData: {
          selected: 'category',
          category: 'category'
        }
    });
    expect(wrapper.find("p").exists()).toBeTruthy();
  });
});