<template>
  <section id="hero">
    <h2 class="section-heading">
      <span>
        <icon-base
          width="17"
          height="18"
          viewBox="0 0 17 18"
          icon-name="cilogo"
        >
          <icon-c-i-logo />
        </icon-base>
      </span>
      Community Story
    </h2>

    <h3>
      Celebrity trainer Libby Babet spills on the working parent juggle.
      <span>
        <icon-base width="98" height="23" viewBox="0 0 98 23" icon-name="arrow">
          <icon-arrow />
        </icon-base>
      </span>
    </h3>
  </section>
</template>

<script>
import IconBase from '@/components/IconBase'
import IconArrow from '@/components/icons/IconArrow'
import IconCILogo from '@/components/icons/IconCILogo'

export default {
  name: 'Banner',
  components: {
    IconBase,
    IconArrow,
    IconCILogo,
  },
}
</script>

<style scoped>
#hero {
  background-color: #fafbfc;
  border-top: 1px solid #e3e4e5;
  border-bottom: 1px solid #e3e4e5;
  padding: 2rem;
  margin: 2rem 0;
}

.section-heading {
  display: flex;
  justify-content: center;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 2.5;
  color: #393848;
  text-align: center;
  background:
      url("./icons/heading-banner-lh.svg") top left no-repeat,
      url("./icons/heading-banner-rh.svg") top right no-repeat;
  width: 12rem;
  margin: 1rem auto;
}

.section-heading span {
  display: inline-block;
  padding-top: .15rem;
  padding-right: 0.5rem;
}

h3 {
  position: relative;
  font-weight: 700;
  font-size: 4rem;
  line-height: 1.25;
  text-align: center;
  color: #393848;
}

h3 span {
  display: block;
  position: relative;
  left: 10%;
}

@media screen and (max-width: 50rem) {
  h3 {
    font-size: 3rem;
    line-height: 1.2;
  }
}
</style>
