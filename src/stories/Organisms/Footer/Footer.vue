<template>
    <footer class="footer">
       <div class="footer__section">
         <p class="footer__section-title">{{firstSection?.title}}</p>
         <nav class="footer__nav">
            <a v-for="(page,index) in firstSection?.pages" :href="page.url" :key="index" class="nav__item">{{page.pageTitle}}</a>
         </nav>
       </div>
       <div  class="footer__section">
         <p  class="footer__section-title">{{secondSection?.title}}</p>
         <nav class="footer__nav">
            <a v-for="(page,index) in firstSection?.pages" :href="page.url" :key="index" class="nav__item">{{page.pageTitle}}</a>
         </nav>
       </div>
       <div  class="footer__section">
         <p  class="footer__section-title">{{thirdSection?.title}}</p>
         <nav class="footer__nav">
            <a v-for="(page,index) in firstSection?.pages" :href="page.url" :key="index" class="nav__item">{{page.pageTitle}}</a>
         </nav>
       </div>
       <form class="footer__section">
            <p class="footer__section-title">{{newsletter?.title}}</p>

            <label for="email">{{newsletter?.inputLabel}}</label>
            <div class="footer__newsletter-input-container">
                <input class="footer__input" id="email" name="email" type="email"/>
                <button class="footer__submit" type="submit">Send</button>
            </div>
       </form>
    </footer>
</template>

<script setup lang="ts">

    const props = defineProps({
        firstSection: Object,
        secondSection: Object,
        thirdSection: Object,
        newsletter: Object,
        logo: String,
        icons: Array
    })
</script>

<style lang="scss">
.footer {
    background: var(--background-grey);
    padding: 64px 16px 20px; 
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        padding: 64px 55px 20px; 
        justify-content: space-between;
    }

    &__section-title {
        font-weight: 700;
    }

    &__nav {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .nav__item {
            color: var(--default-black);
            text-decoration: none;
        }
    }

    &__newsletter-input-container {
        margin-top: 7px;
    }

    &__input {
        border: 1px solid var(--default-red);
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        padding: 10px
    }

    &__submit {
        padding: 10px;
        color: var(--default-white);
        background: var(--default-red);
        border: 1px solid var(--default-red);
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
}
</style>