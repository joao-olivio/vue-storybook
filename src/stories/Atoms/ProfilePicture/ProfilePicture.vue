<template>
  <img class="profile-picture" :src="image" />
</template>

<script setup lang="ts">
const props = defineProps({
  image: String,
});
</script>

<style lang="scss">
.profile-picture {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>
