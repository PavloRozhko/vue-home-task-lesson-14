<template>
  <div class="add-form">
    <div class="add-form__item">
      <label for="product">Назва продукту</label>
      <input id="product" v-model="product.title" type="text" />
    </div>
    <div class="add-form__item">
      <label for="price">Ціна продукту</label>
      <input id="price" v-model="product.price" type="number" />
    </div>
    <div class="add-form__action">
      <button @click="onAdd">Додати</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ProductsEditor',

  data() {
    return {
      product: {},
    }
  },

  methods: {
    ...mapActions('products', ['addProduct']),
    onAdd() {
      this.addProduct(this.product)

      this.$router.push({
        name: 'selector',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.add-form {
  max-width: 600px;
  margin: 0 auto;
  border: 2px solid #000;
  border-radius: 5px;
  background-color: lavender;
  padding: 10px;
  // .add-form__item
  &__item {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 15px;
    input {
      height: 25px;
      padding: 0 5px;
    }
  }
  // .add-form__action
  &__action {
    button {
      padding: 10px 20px;
      background-color: goldenrod;
      font-weight: 700;
    }
  }
}
</style>
