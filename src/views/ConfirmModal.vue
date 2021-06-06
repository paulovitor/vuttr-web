<template>
  <form action="">
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">
          <b-icon pack="fas" icon="times" />Remove tool
        </p>
      </header>
      <section class="modal-card-body">
        <div class="content">Are you sure you want to remove tool?</div>
      </section>
      <footer class="modal-card-foot">
        <b-button label="Cancel" @click="$emit('close')" />
        <b-button label="Yes, remove" type="is-primary" @click="remove()" />
      </footer>
    </div>
  </form>
</template>

<script>
export default {
  props: ["tool"],
  methods: {
    remove() {
      this.$emit("remove-tool", this.tool);
      this.$emit("close");
    },
  },
};
</script>
