<template>
  <CustomSection :title="title" :bg-grey="bgGrey">
    <div class="review-section">
      <div class="review-section__cards-wrapper">
        <ReviewCard
          v-for="review in reviews"
          :image="review.image"
          :testimonial="review.testimonial"
          :author-name="review.authorName"
          :author-occupation="review.authorOccupation"
        ></ReviewCard>
      </div>
      <Button
        class="review-section__more-btn"
        :primary="true"
        :label="btnLabel"
      ></Button>
    </div>
  </CustomSection>
</template>

<script setup lang="ts">
import CustomSection from "../CustomSection/CustomSection.vue";
import Button from "../../Atoms/Button/Button.vue";
import ReviewCard from "../../Molecules/ReviewCard/ReviewCard.vue";
import type { PropType } from "vue";
type Review = {
  image: string;
  testimonial: string;
  authorName: string;
  authorOccupation: string;
};

const props = defineProps({
  title: String,
  bgGrey: Boolean,
  btnLabel: String,
  reviews: Array as PropType<Array<Review>>,
});
</script>

<style lang="scss">
.review-section {
  &__cards-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  &__more-btn{
    margin-top: 30px;
  }
}
</style>
