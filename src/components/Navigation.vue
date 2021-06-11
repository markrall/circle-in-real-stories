<template>
  <nav>
    <h2>Navigation</h2>
    <ul>
      <li>
        <router-link :to="{ name: 'Home' }" active-class="active">Real Stories</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Submit Story' }" active-class="active">Submit your own</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style scoped>
nav {
  border-top: 1px solid #C9C9DC;
  margin: 2.5rem 0;
}

h2 {
  display: none;
}

ul {
  display: flex;
  justify-content: center;
  list-style: none;
  position: relative;
  padding: 0;
}

a {
  color: #9B9BA5;
  margin: 0 1rem;
  padding: 1rem;
  text-decoration: none;
  position: relative;
  top: -3.5px;
}

.active {
  background: url("./icons/nav-item-border.svg") top center no-repeat;
  font-weight: 700;
  color: #61AA91;
}

@media screen and (max-width: 28.125rem) {
  a {
    margin: 0.5rem;
    padding: 1rem 0.5rem;
  }
}
</style>
