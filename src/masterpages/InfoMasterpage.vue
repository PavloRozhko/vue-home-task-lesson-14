<template>
  <div class="info">
    <div class="info__action">
      <router-link :to="{ name: 'home' }">На головну</router-link>
    </div>
    <div class="info__content">
      <slot></slot>
    </div>
    <div class="info__slider slider">
      <h1 class="slider__title">Галерея</h1>
      <swiper-container
        class="slider__swiper"
        :slides-per-view="2"
        :speed="500"
        :loop="true"
        :navigation="true"
        :autoplay="true"
      >
        <swiper-slide>
          <div class="slider__slide">
            <img
              src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slider__slide">
            <img
              src="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slider__slide">
            <img
              src="https://images.pexels.com/photos/3028500/pexels-photo-3028500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slider__slide">
            <img src="https://cdn.pixabay.com/photo/2016/11/29/05/07/breads-1867459_1280.jpg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slider__slide">
            <img src="https://cdn.pixabay.com/photo/2016/11/29/08/06/assortment-1868297_1280.jpg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slider__slide">
            <img src="https://cdn.pixabay.com/photo/2016/03/27/22/08/colorful-1284475_1280.jpg" />
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoMasterpage',
  setup() {
    const spaceBetween = 10
    const onProgress = (e) => {
      const [swiper, progress] = e.detail
      console.log(progress)
      console.log(swiper)
    }

    const onSlideChange = (e) => {
      console.log('slide changed')
      console.log(e)
    }

    return {
      spaceBetween,
      onProgress,
      onSlideChange,
    }
  },
}
</script>

<style lang="scss" scoped>
.info {
  padding: 20px 0;
  // .info__action
  &__action {
    font-weight: 700;
    font-size: 18px;
    a {
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
.slider {
  // .slider__title
  &__title {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;
  }
  // .slider__slide
  &__slide {
    padding: 0 50px;
    img {
      max-width: 100%;
    }
  }
}
</style>
