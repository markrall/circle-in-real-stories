<template>
  <div v-for="(story, index) in stories" :key="index" class="story-card" :class="{ heroPost: story.hero, archiveStory: !isFeatured }">
    <span class="story-subject">{{ story.subject }}</span>
    <img :src="story.image" :alt="`${story.subject}' story`" />
    <div class="post-details">
      <h3>
        <span>{{ story.title }}</span>
        <icon-base width="98" height="23" viewBox="0 0 98 23" icon-name="arrow">
          <icon-arrow />
        </icon-base>
      </h3>
      <p class="story-description">
        {{ story.description }}
      </p>
      <p class="story-published">
        <small
        >Published on <strong>{{ publishedDate(index) }}</strong></small
        >
      </p>
    </div>
  </div>
</template>

<script>
import IconBase from '@/components/IconBase'
import IconArrow from '@/components/icons/IconArrow'

export default {
  name: 'StoryCard',
  props: {
    posts: {
      type: Array,
      required: true,
    },
    isFeatured: {
      type: Boolean,
      required: false,
    }
  },
  data() {
    return {
      stories: this.posts,
      featured: this.isFeatured,
    }
  },
  components: {
    IconBase,
    IconArrow,
  },
  methods: {
    publishedDate(index) {
      const date = new Date(this.stories[index].published)
      const formattedDay = date.toLocaleString('en-AU', { day: 'numeric' })
      const formattedMonth = date.toLocaleString('en-AU', { month: 'short' })
      const formattedYear = date.toLocaleString('en-AU', { year: 'numeric' })

      return `${formattedMonth} ${formattedDay}, ${formattedYear}`
    },
  },
}
</script>

<style scoped>
.story-card {
  padding: 1.5rem;
}

img {
  width: 100%;
}

.story-subject {
  display: inline-block;
  font-size: 0.875rem;
  line-height: 1.1;
  text-align: center;
  color: #393848;
  padding: 0.375rem 1rem;

  border: 1px solid #393848;
  box-sizing: border-box;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin-bottom: 1.5rem;
}

h3{
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 1.5;
  margin: 1rem 0;
  color: #393848;
}

h3 span {
  margin-right: 2rem;
}

.story-description {
  font-size: 1rem;
  line-height: 1.875;
  color: #393848;
  margin-bottom: 1rem;
}

.story-published {
  font-size: .75rem;
  line-height: 1.8125rem;
  color: #393848;
}

.heroPost {
  position: relative;
  margin-bottom: 8rem;
}

.heroPost .post-details {
  position: absolute;
  bottom: -7rem;
  max-width: 30rem;
  background-color: #fff;
  padding: 1rem 1rem 1rem 0;
}

.archiveStory {
  max-width: 33%;
}

@media screen and (max-width: 60rem) {
  .heroPost {
    margin-bottom: auto;
  }

  .heroPost .post-details {
    position: relative;
    bottom: auto;
    padding: 0;
  }
}

@media screen and (max-width: 50rem) {
  .archiveStory {
    max-width: 100%;
  }
}
</style>
