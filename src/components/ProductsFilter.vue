<template>
  <div class="filter">
    <label for="search"> Пошук продуктів за назвою </label>
    <input id="search" v-model="searchText" type="search" @input="setSearchedText(searchText)" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ProductsFilter',

  data() {
    return {
      searchText: null,
    }
  },
  methods: {
    ...mapActions('products', ['setSearchedText']),
  },
}
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
  flex-direction: column;
  gap: 15px;
  // align-items: center;
  label {
    font-weight: 700;
  }
  input {
    padding: 0 5px;
    height: 30px;
    border: 1px solid #000;
  }
}
</style>
