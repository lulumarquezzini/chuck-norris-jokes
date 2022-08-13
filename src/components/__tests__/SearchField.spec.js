import { describe, it, expect, vi } from "vitest";

import { mount } from "@vue/test-utils";
import { useRouter } from "vue-router";

import SearchField from "../SearchField.vue";

vi.mock("vue-router", () => ({
  useRouter: vi.fn(() => ({
    push: () => {},
  })),
}));

describe("SearchField", () => {
  it("renders properly", () => {
    const wrapper = mount(SearchField);
    expect(wrapper.find("input").exists()).toBeTruthy();
  });

  it("should not search if input is empty", async () => {
    const push = vi.fn();
    useRouter.mockImplementation(() => ({
      push,
    }));
    const wrapper = mount(SearchField, {
      global: {
        stubs: ["router-link", "router-view"], // Stubs for router-link and router-view in case they're rendered in your template
      },
    });
    await wrapper.trigger("keydown.enter");
    expect(push).toHaveBeenCalledTimes(0);
  });
});
