<template>
  <div class="product-list">
    <card-item
      v-for="product in filteredProductsList"
      :key="product.id"
      :card-data="{ src: product.imgSrc, title: product.title, price: product.price, currency: 'грн.' }"
      class="product-list__item"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CardItem from './CardItem.vue'
export default {
  name: 'ProductsList',
  components: {
    CardItem,
  },

  computed: {
    ...mapGetters('products', ['filteredProductsList']),
  },
}
</script>

<style lang="scss" scoped>
.product-list {
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
}
</style>
