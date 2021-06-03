<template>
  <div class="home">
    <h1>VUTTR</h1>
    <h3>Very Useful Tools to Remember</h3>
    <div class="options">
      <ul>
        <li><input type="text" /></li>
        <li><input type="checkbox" /></li>
        <li><button type="button">+ Add</button></li>
      </ul>
    </div>
    <Card msg="Notion" />
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: {
    Card,
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
