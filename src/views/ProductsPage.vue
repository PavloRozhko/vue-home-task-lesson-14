<template>
  <main-masterpage>
    <div class="products">
      <h1 class="products__title">Наші продукти</h1>
      <div class="products__menu menu">
        <nav class="menu__body">
          <ul class="menu__list">
            <li class="menu__item">
              <router-link class="menu__link" to="/selector">Список товарів</router-link>
            </li>
            <li class="menu__item">
              <router-link class="menu__link" to="/editor">Додати новий товар</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="products__items">
        <router-view class="products__filter" name="filter" />
        <router-view class="products__list" />
      </div>
    </div>
  </main-masterpage>
</template>

<script>
import MainMasterpage from '@/masterpages/MainMasterpage.vue'
export default {
  name: 'ProductsPage',
  components: { MainMasterpage },
}
</script>

<style lang="scss" scoped>
.products {
  // .products__title
  &__title {
    margin-bottom: 25px;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
  }
  // .products__menu
  &__menu {
    margin-bottom: 30px;
  }
  // .products__items
  &__items {
    display: flex;
    gap: 15px;
  }
  // .products__filter
  &__filter {
    flex-basis: 20%;
  }
  // .products__list
  &__list {
    flex-basis: 80%;
  }
}
.menu {
  // .menu__list
  &__list {
    display: flex;
    align-items: center;
    column-gap: 20px;
  }
  // .menu__link
  &__link {
    font-weight: 700;
    &.router-link-exact-active {
      color: #42b983;
    }
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
