<template>
    <div class="thumbnail">
        <img class="thumbnail__image" :src="image"/>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        image: String
    });
</script>

<style lang="scss">
    .thumbnail {
        border-radius: 15px;
        max-width: 370px;
        height: 250px;
        position: relative;
        overflow: hidden;

        &__image {
            position: absolute;
            width: 100%;
            height: 100%;
        }
    }
</style>