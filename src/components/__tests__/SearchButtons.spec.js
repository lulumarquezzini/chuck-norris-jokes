import { describe, it, expect, vi } from "vitest";

import { mount } from "@vue/test-utils";
import { useRouter } from "vue-router";

import SearchButtons from "../SearchButtons.vue";

vi.mock("vue-router", () => ({
  useRouter: vi.fn(() => ({
    push: () => {},
  })),
}));

describe("SearchButtons", () => {
  it("renders properly", () => {
    const wrapper = mount(SearchButtons);
    expect(wrapper.text()).toContain("Search");
    expect(wrapper.text()).toContain("I'm Feeling Lucky");
  });

  it("should not search if input is empty", async () => {
    const push = vi.fn();
    useRouter.mockImplementation(() => ({
      push,
    }));
    const wrapper = mount(SearchButtons, {
      global: {
        stubs: ["router-link", "router-view"], // Stubs for router-link and router-view in case they're rendered in your template
      },
    });
    wrapper.findAll("button").at(0).trigger("click");
    expect(push).toHaveBeenCalledTimes(0);
  });
});
