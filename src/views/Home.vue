<template>
  <section class="posts">
    <StoryCard :posts="posts.featured" is-featured />
  </section>

  <Banner />

  <section class="posts">
    <StoryCard :posts="posts.stories" />
  </section>

  <section class="load-posts">
    <Button />
  </section>

</template>

<script>
import Banner from "@/components/Banner";
import StoryCard from "@/components/StoryCard";
import Button from "@/components/Button";

import posts from '../data/posts.json'

export default {
  name: "Home",
  components: {
    Banner,
    StoryCard,
    Button,
  },
  data() {
    return { posts }
  },
}
</script>

<style scoped>
.posts {
  display: flex;
}

.load-posts {
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 50rem) {
  .posts {
    display: block;
  }
}
</style>