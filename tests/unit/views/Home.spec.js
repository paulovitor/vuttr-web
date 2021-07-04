import { createLocalVue, shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import Buefy from "buefy";
import Vuex from "vuex";

describe("Home.vue", () => {

    let actions;
    let getters;
    let wrapper;

    beforeEach(() => {

        const localVue = createLocalVue();
        localVue.use(Buefy);
        localVue.use(Vuex);

        actions = {
            addTool: jest.fn(),
            removeTool: jest.fn(),
            getAll: jest.fn(),
        };
        
        getters = {
            getToolsByQuery: jest.fn(),
            getToolsByTags: jest.fn(),
        };
        
        const store = new Vuex.Store({
            state: {
                tools: [],
            },
            actions,
            getters,
        });

        wrapper = shallowMount(Home, {
            store,
            localVue,
        });
    });

    it("should define vue instance", () => {

        expect(wrapper.isVueInstance()).toBe(true);

        expect(actions.getAll).toHaveBeenCalled();
    });

    // it("searchByQuery should dispatches action", async() => {

        // const input = wrapper.find({ name: 'BInput' });

        // jest.spyOn(wrapper.vm, 'input');
        // jest.runAllTimers();

        // expect(input.exists()).toBe(true);

        // input.element.value = "input";
        // input.trigger("input");

        // expect(wrapper.emitted().input).toBeTruthy();

        // wrapper.setData({ query: "teste" });

        // wrapper.vm.searchByQuery();

        // expect(getters.getToolsByQuery).toHaveBeenCalled();
    // });
});
