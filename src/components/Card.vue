<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <nav class="level">
          <div class="level-left">
            <div class="level-item">
              <a :href="tool.link" target="_blank" rel="noopener">
                {{ tool.title }}
              </a>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <a class="button is-danger is-inverted" @click="remove(tool)">
                x remove
              </a>
            </div>
          </div>
        </nav>
        <p>
          {{ tool.description }}
        </p>
        <p>
          <b-taglist>
            <b-tag v-for="tag in tool.tags" :key="tag" type="is-info">
              #{{ tag }}
            </b-tag>
          </b-taglist>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tool: {
      type: Object,
      required: true,
    },
  },
  methods: {
    remove(tool) {
      this.$emit("delete-tool", tool);
    },
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 20px;
}
</style>
