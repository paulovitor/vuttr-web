<template>
  <div class="container is-max-desktop">
    <section class="section">
      <h1 class="title">VUTTR</h1>
      <h2 class="subtitle">Very Useful Tools to Remember</h2>
      <nav class="level">
        <div class="level-left">
          <div class="level-item">
            <b-field>
              <b-input placeholder="search"></b-input>
            </b-field>
          </div>
          <div class="level-item">
            <b-field>
              <b-checkbox>Search in tags only</b-checkbox>
            </b-field>
          </div>
        </div>
        <div class="level-right">
          <p class="level-item"><a class="button is-success">+ Add</a></p>
        </div>
      </nav>
      <Card
        v-for="tool in tools"
        :key="tool.id"
        :title="tool.title"
        :link="tool.link"
        :content="tool.description"
        :tags="tool.tags"
      />
    </section>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: {
    Card,
  },
  data() {
    return {
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
    };
  },
};
</script>
