<template>
  <section class="custom-section" :class="{ 'bg-grey': props.bgGrey }">
    <h2 class="custom-section__title">{{ props.title }}</h2>
    <p v-if="props.subTitle" class="custom-section__subtitle">
      {{ props.subTitle }}
    </p>
    <slot class="custom-section__content"></slot>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  subTitle: String,
  bgGrey: Boolean,
});
</script>

<style lang="scss">
.bg-grey {
  background-color: var(--default-grey);
}

.custom-section {
  width: 100%;
  text-align: center;
  padding: 70px 0;
  margin: 0;

  &__title {
    margin: 0;
  }

  &__subtitle {
    max-width: 400px;
    margin: 26px auto 0;
  }

  &__content {
    margin-top: 60px;
  }
}
</style>
