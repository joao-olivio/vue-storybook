<template>
  <div
    class="thumbnail"
    :class="[props.offer ? 'thumbnail--offer' : 'thumbnail--post']"
  >
    <img class="thumbnail__image" :src="image" />
    <div class="thumbnail-offer" v-if="props.offer">
      <span class="thumbnail-offer__item">
        <div class="thumbnail-offer__item__info">
          <small>City</small>
          <small>
            <b>{{ props.offer.city }}</b>
          </small>
        </div>
      </span>
      <span class="thumbnail-offer__item d-none-mobile">
        <div class="vertical-line"></div>
        <div class="thumbnail-offer__item__info">
          <small>Dates</small>
          <small>
            <b>{{ props.offer.initialDate }} - {{ props.offer.finalDate }}</b>
          </small>
        </div>
      </span>
      <span class="thumbnail-offer__item">
        <div class="vertical-line"></div>
        <div class="thumbnail-offer__item__info">
          <small> Price</small>
          <small>
            <b>${{ props.offer.price }}</b>
          </small>
        </div>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
type Offer = {
  city: string;
  initialDate: string;
  finalDate: string;
  price: string;
};

const props = defineProps({
  image: String,
  offer: {
    type: Object as () => Offer,
  },
});
</script>

<style lang="scss">
.thumbnail {
  border-radius: 15px;
  position: relative;
  overflow: hidden;

  &--post {
    width: 328px;
    height: 224px;

    @media screen and (min-width: 768px) {
      width: 370px;
      height: 250px;
    }
  }

  &--offer {
    width: 328px;
    height: 190px;

    @media screen and (min-width: 768px) {
      width: 570px;
      height: 330px;
    }
  }

  &__image {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  &-offer {
    padding: 15px;
    border-radius: 15px;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0 15px 15px;
    background-color: var(--default-white);
    opacity: 0.8;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    &__item {
      display: flex;
      gap: 5px;

      &__info {
        display: flex;
        flex-direction: column;
      }
    }
  }
}

.vertical-line {
  border-left: 1px solid #999999;
  height: 100%;
}

.d-none-mobile {
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
}
</style>
