<template>
    <section class="hero" :style="`--bgImage: url(${image})`">
        <div class="hero__container">
            <h1 class="hero__title">{{title}}</h1>
            <p class="hero__description">{{description}}</p>
        </div>
       
    </section>
</template>

<script setup lang="ts">

const props = defineProps({
    title: String,
    description: String,
    image: String,
})


</script>

<style lang="scss">

.hero {
    background-image: var(--bgImage);
    background-size: cover;
    min-height: 341px;
    position: relative;
    

    @media screen and (min-width: 768px) {
        min-height: 500px;
        border-radius: 20px;
        border: 1px solid var(--default-black);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin: 72px 55px 0;
    }

    &__container {
        padding: 32px 16px;

        @media screen and (min-width: 768px) {
           padding: 100px 70px;
        }
    }   

    &__title {
       max-width: 313px;
       font-weight: 700;
    }

    &__description {
       max-width: 500px;
       font-weight: 500;
    }
}

</style>