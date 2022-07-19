<template>
  <button :class="classes">{{ label }}</button>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  primary: Boolean,
  label: String,
});
const classes = computed(() => ({
  btn: true,
  "btn--primary": props.primary,
  "btn--secondary": !props.primary,
}));
console.log("Testing Automation")
</script>

<style lang="scss">
.btn {
  cursor: pointer;
  height: 50px;
  width: 328px;
  border: 2px solid #ee685f;
  border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    width: 275px;
  }

  &--primary {
    background-color: #ee685f;
    color: white;
  }

  &--secondary {
    background-color: white;
    color: #ee685f;
  }
}
</style>