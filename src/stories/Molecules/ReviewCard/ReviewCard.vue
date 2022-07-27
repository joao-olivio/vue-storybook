<template>
  <div class="review-card">
    <div class="review-card__profile-picture">
      <ProfilePicture :image="props.image"></ProfilePicture>
    </div>
    <p class="review-card__testimonial">{{ props.testimonial }}</p>
    <p class="review-card-author">
      <b class="review-card-author__name">{{ props.authorName }}</b
      >,
      <i class="review-card-author__occupation">{{ props.authorOccupation }}</i>
    </p>
  </div>
</template>

<script setup lang="ts">
import ProfilePicture from "../../Atoms/ProfilePicture/ProfilePicture.vue";
const props = defineProps({
  image: String,
  testimonial: String,
  authorName: String,
  authorOccupation: String,
});
</script>

<style lang="scss">
.review-card {

  &__profile-picture{
    text-align: center;
  }

}
</style>
