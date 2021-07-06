<template>
  <form action="">
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">
          <b-icon pack="fas" icon="plus" /> Add new tool
        </p>
      </header>
      <section class="modal-card-body">
        <b-message v-if="errors.length" type="is-danger">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </b-message>
        <b-field label="Tool Name">
          <b-input v-model="tool.title" required></b-input>
        </b-field>
        <b-field label="Tool Link">
          <b-input type="url" v-model="tool.link" required></b-input>
        </b-field>
        <b-field label="Tool description">
          <b-input
            type="textarea"
            maxlength="200"
            v-model="tool.description"
            required
          >
          </b-input>
        </b-field>
        <b-field label="Tags">
          <b-taginput
            v-model="tool.tags"
            ellipsis
            icon-pack="fas"
            icon="tag"
            aria-close-label="Delete this tag"
          >
          </b-taginput>
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <b-button label="Cancel" @click="$emit('close')" />
        <b-button label="Add tool" type="is-primary" @click="add()" />
      </footer>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      errors: [],
      tool: {},
    };
  },
  methods: {
    add() {
      this.errors = [];

      if (!this.tool.title) {
        this.errors.push("Name is required");
      }
      if (!this.tool.link) {
        this.errors.push("Link is required");
      }
      if (!this.tool.description) {
        this.errors.push("Description is required");
      }
      if (!this.tool.tags || this.tool.tags.length == 0) {
        this.errors.push("Tags is required");
      }

      if (this.errors.length > 0) {
        return false;
      }

      this.$emit("add-tool", this.tool);
      this.$emit("close");
      return true;
    },
  },
};
</script>
