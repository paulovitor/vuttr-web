import { createLocalVue, shallowMount } from "@vue/test-utils";
import Card from "@/components/Card.vue";
import Buefy from "buefy";

const localVue = createLocalVue()
localVue.use(Buefy);

const tool = {
  link: "tool-link",
  title: "tool-title",
  description: "tool-description",
  tags: ["office"],
};

const wrapper = shallowMount(Card, {
  localVue,
  propsData: { tool },
});

describe("Card.vue", () => {

  it("should define tool props", () => {

    expect(wrapper.vm.tool).toBe(tool);
  });

  it("should has rendered link element", () => {

    const link = wrapper.find("a");
    expect(link.exists()).toBe(true);
    expect(link.element.attributes["href"].value).toBe("tool-link");
    expect(link.element.innerHTML).toContain("tool-title");
  });

  it("remove should emit delete-tool event", () => {

    wrapper.vm.remove();

    const payload = wrapper.emitted("delete-tool");
    expect(payload).toBeTruthy();
    expect(payload[0][0]).toEqual(tool);
  });
});
