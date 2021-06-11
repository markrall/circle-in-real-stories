<template>
  <header>
    <h1><span>Real</span> stories</h1>
    <p class="tagline">From working parents at MYOB to inspire you.</p>

    <Navigation />
  </header>
</template>

<script>
import Navigation from './Navigation'

export default {
  name: "Header",
  components: {
    Navigation
  }
}
</script>

<style scoped>
header {
  padding: 2rem;
}
h1 {
  font-weight: 700;
  font-size: 2.75rem;
  line-height: 2;
  text-align: center;
  color: #393848;
}

h1 span {
  color: #ED5861;
}

.tagline {
  font-size: 20px;
  line-height: 1.5;
  text-align: center;
  color: #9B9BA5;
}

@media screen and (max-width: 28.125rem) {
  header {
    padding: 1rem;
  }
}
</style>