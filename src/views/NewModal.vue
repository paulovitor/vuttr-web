<template>
  <form action="">
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">+ Add new tool</p>
      </header>
      <section class="modal-card-body">
        <div class="content">Form</div>
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
      tool: {},
    };
  },
  methods: {
    add() {
      this.$emit("add-tool", this.tool);
      this.$emit("close");
    },
  },
};
</script>
