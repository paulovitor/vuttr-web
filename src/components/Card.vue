<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <nav class="level">
          <div class="level-left">
            <div class="level-item">
              <a :href="link" target="_blank" rel="noopener">{{ title }}</a>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item"><a class="button is-danger is-inverted">x remove</a></div>
          </div>
        </nav>
        <p>
          {{ content }}
        </p>
        <p>
          <b-taglist>
            <b-tag v-for="tag in tags" :key="tag" type="is-info">
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
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 20px;
}
</style>
