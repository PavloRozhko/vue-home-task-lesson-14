<template>
  <div class="card">
    <div class="card__image">
      <img :src="cardData.src ?? defaultImageSrc" />
    </div>
    <div class="card__info">
      <div class="card__title">
        {{ cardData.title }}
      </div>
      <slot>
        <div class="card__label">{{ cardData.price }} {{ cardData.currency }}</div>
      </slot>
    </div>
    <div class="card__action">
      <button>Купити</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    cardData: {
      type: Object,
      required: true,
    },
    defaultImageSrc: {
      type: String,
      default:
        'https://static.vecteezy.com/system/resources/previews/009/386/075/non_2x/new-sign-icon-button-design-free-png.png',
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  width: 150px;
  padding: 5px;
  border: 2px solid #000;
  border-radius: 5px;
  // .card__image
  &__image {
    margin-bottom: 5px;
    img {
      max-width: 100%;
      aspect-ratio: 10/9;
      object-fit: contain;
    }
  }
  // .card__info
  &__info {
    text-align: center;
    margin-bottom: 10px;
  }
  // .card__title
  &__title {
    font-weight: 700;
    margin-bottom: 5px;
  }
  // .card__price
  &__label {
    color: green;
  }
  // .card__action
  &__action {
    text-align: center;
    button {
      padding: 10px 20px;
      background-color: green;
      color: #fff;
      font-weight: 700;
      border-radius: 5px;
    }
  }
}
</style>
