<template>
  <div class="post-card">
    <Thumbnail class="post-card__thumbnail" :image="image" />
    <div class="post-card-header">
      <small class="post-card-header__date"> {{ props.date }} </small>
      <small class="post-card-header__estimated-reading-time">
        <img :src="clockIcon" />
        {{ props.estimatedReadingTime }}</small
      >
    </div>
    <h3 class="post-card__title">{{ title }}</h3>
    <p class="post-card__description">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import Thumbnail from "../../Atoms/Thumbnail/Thumbnail.vue";
import clockIcon from "../../../assets/icons/clock.svg";
import { onMounted } from "vue";
const props = defineProps({
  image: String,
  date: String,
  estimatedReadingTime: String,
  title: String,
  description: String,
});

onMounted(() => {
  console.log(clockIcon);
});
</script>

<style lang="scss">
.post-card {
  width: 370px;
  height: 410px;

  &-header {
    display: flex;
    justify-content: space-between;
    margin: 25px 0 10px 0;

    &__estimated-reading-time {
      color: var(--default-blue);
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }

  &__description {
    white-space: break-spaces;
  }
}
</style>
