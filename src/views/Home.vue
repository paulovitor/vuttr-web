<template>
  <div class="container is-max-desktop">
    <section class="section">
      <h1 class="title">VUTTR</h1>
      <h2 class="subtitle">Very Useful Tools to Remember</h2>
      <nav class="level">
        <div class="level-left">
          <div class="level-item">
            <b-field>
              <b-input
                v-model="query"
                placeholder="search"
                icon-pack="fas"
                icon="search"
                @input="searchByQuery"
              >
              </b-input>
            </b-field>
          </div>
          <div class="level-item">
            <b-field>
              <b-checkbox v-model="onlyTags" @input="searchByQuery">
                Search in tags only
              </b-checkbox>
            </b-field>
          </div>
        </div>
        <div class="level-right">
          <p class="level-item">
            <b-button icon-left="plus" @click="openNewModal()">Add</b-button>
          </p>
        </div>
      </nav>
      <Card
        v-for="tool in list"
        :tool="tool"
        :key="tool.id"
        v-on:delete-tool="openConfirmModal"
      />
    </section>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import NewModal from "./NewModal.vue";
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Card,
  },
  data() {
    return {
      query: "",
      onlyTags: false,
      list: [],
    };
  },
  computed: {
    ...mapGetters(["getToolsByQuery", "getToolsByTags"]),
    ...mapState(["tools"]),
  },
  watch: {
    tools: function (val) {
      this.list = val;
    },
  },
  mounted() {
    this.getAll();
  },
  methods: {
    ...mapActions(["addTool", "removeTool", "getAll"]),
    searchByQuery() {
      if (this.query) {
        this.list = this.onlyTags
          ? this.getToolsByTags(this.query)
          : this.getToolsByQuery(this.query);
      }
    },
    openNewModal() {
      this.$buefy.modal.open({
        parent: this,
        component: NewModal,
        hasModalCard: true,
        trapFocus: true,
        events: {
          "add-tool": (tool) => this.addTool(tool),
        },
      });
    },
    openConfirmModal(tool) {
      this.$buefy.dialog.confirm({
        title: "x Remove tool",
        message: "Are you sure you want to remove tool?",
        confirmText: "Yes, remove",
        type: "is-danger",
        onConfirm: () => this.removeTool(tool),
      });
    },
  },
};
</script>
