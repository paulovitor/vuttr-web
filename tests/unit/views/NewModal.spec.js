import { createLocalVue, shallowMount } from "@vue/test-utils";
import NewModal from "@/views/NewModal.vue";
import Buefy from "buefy";

const localVue = createLocalVue();
localVue.use(Buefy);

const tool = {
  link: "tool-link",
  title: "tool-title",
  description: "tool-description",
  tags: ["office"],
};

const wrapper = shallowMount(NewModal, {
  localVue,
});

describe("NewModal.vue", () => {
  it("should define tool data", () => {
    wrapper.setData({ tool: tool });

    expect(wrapper.vm.$data.tool).toStrictEqual(tool);
  });

  it("add should emit add-tool and close events", () => {
    wrapper.setData({ tool: tool });

    let value = wrapper.vm.add();
    expect(value).toBeTruthy();

    const payload = wrapper.emitted("add-tool");
    expect(payload).toBeTruthy();
    expect(payload[0][0]).toEqual(tool);
  });

  it("add should validate required fields", () => {
    wrapper.setData({ tool: {} });

    let value = wrapper.vm.add();
    expect(value).toBeFalsy();

    wrapper.setData({
      tool: {
        title: "teste",
      },
    });

    value = wrapper.vm.add();
    expect(value).toBeFalsy();

    wrapper.setData({
      tool: {
        title: "title",
        link: "link",
      },
    });

    value = wrapper.vm.add();
    expect(value).toBeFalsy();

    wrapper.setData({
      tool: {
        title: "title",
        link: "link",
        description: "description",
      },
    });

    value = wrapper.vm.add();
    expect(value).toBeFalsy();

    wrapper.setData({
      tool: {
        title: "title",
        link: "link",
        description: "description",
        tags: [],
      },
    });

    value = wrapper.vm.add();
    expect(value).toBeFalsy();
  });
});
