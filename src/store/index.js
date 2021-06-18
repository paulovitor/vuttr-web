import Vue from "vue";
import Vuex from "vuex";
import { ADD_TOOL, REMOVE_TOOL, SET_TOOLS } from "./mutation-types";
import service from "@/api/tools.service.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tools: [],
  },
  mutations: {
    [ADD_TOOL](state, tool) {
      state.tools.push(tool);
    },
    [REMOVE_TOOL](state, tool) {
      state.tools.splice(state.tools.indexOf(tool), 1);
    },
    [SET_TOOLS](state, tools) {
      state.tools = tools;
    },
  },
  actions: {
    addTool: async ({ commit }, tool) => {
      try {
        const { data } = await service.create(tool);
        commit(ADD_TOOL, data);
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    getAll: async ({ commit }) => {
      try {
        const { data } = await service.getAll();
        commit(SET_TOOLS, data);
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    removeTool: async ({ commit }, tool) => {
      try {
        await service.delete(tool.id);
        commit(REMOVE_TOOL, tool);
      } catch (error) {
        console.log(error);
        return false;
      }
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
