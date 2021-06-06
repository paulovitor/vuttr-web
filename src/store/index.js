import Vue from "vue";
import Vuex from "vuex";
import { ADD_TOOL, REMOVE_TOOL } from "./mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tools: [
      {
        id: 1,
        title: "Notion",
        link: "https://notion.so",
        description:
          "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
        tags: [
          "organization",
          "planning",
          "collaboration",
          "writing",
          "calendar",
        ],
      },
      {
        id: 2,
        title: "json-server",
        link: "https://github.com/typicode/json-server",
        description:
          "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
        tags: ["api", "json", "schema", "node", "github", "rest"],
      },
    ],
  },
  mutations: {
    [ADD_TOOL](state, tool) {
      state.tools.push(tool);
    },
    [REMOVE_TOOL](state, tool) {
      state.tools.splice(state.tools.indexOf(tool), 1);
    },
  },
  actions: {
    addTool({ commit }, tool) {
      commit(ADD_TOOL, tool);
    },
    removeTool({ commit }, tool) {
      commit(REMOVE_TOOL, tool);
    },
  },
  modules: {},
  getters: {
    getToolsByQuery: (state) => (query) => {
      return state.tools.filter(
        (tool) =>
          tool.title.includes(query) ||
          tool.description.includes(query) ||
          tool.tags.includes(query)
      );
    },
    getToolsByTags: (state) => (query) => {
      return state.tools.filter((tool) => tool.tags.includes(query));
    },
  },
});
