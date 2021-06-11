<template>
  <Header />
  <main>
    <router-view/>
  </main>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: 'Layout',
  components: {
    Header
  }
}
</script>

<style scoped>
#app {
  font-family: Lato, "Lucida Grande", Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 70.25rem;
  margin: 0 auto;
}

main {
  margin-bottom: 2rem;
}
</style>
