<template>
  <a href="" class="button">
    <span>load more stories</span>
    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 1L7 7L1 0.999999" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </a>
</template>

<script>
export default {
  name: "Button"
}
</script>

<style scoped>
.button {
  display: inline-block;
  background: #ED5861;
  border-radius: 10px;
  padding: 1rem 2rem;
  color: #fff;
  margin: 2rem 0;
  text-decoration: none;
}

.button span {
  margin-right: 1rem;
}
</style>