<template>
  <div class="page">
    <div class="page__header header">
      <div class="header__logo">
        <img src="../assets/img/logo.svg" />
      </div>
      <div class="header__menu menu">
        <nav class="menu__body">
          <ul class="menu__list">
            <li class="menu__item">
              <router-link class="menu__link" :to="{ name: 'home' }">Головна</router-link>
            </li>
            <li class="menu__item">
              <router-link class="menu__link" :to="{ name: 'selector' }">Товари</router-link>
            </li>
            <li class="menu__item">
              <router-link class="menu__link" :to="{ name: 'suppliers' }">Постачальники</router-link>
            </li>
            <li class="menu__item">
              <router-link class="menu__link" :to="{ name: 'contacts' }">Контакти</router-link>
            </li>
            <li class="menu__item">
              <router-link class="menu__link" :to="{ name: 'rules' }">Правила купівлі</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="page__main main">
      <slot></slot>
    </div>
    <div class="page__footer footer">
      <slot name="left-footer">
        <div class="footer__left-side">Рейтинг магазину: 1</div>
      </slot>
      <slot name="right-footer">
        <div class="footer__right-side">Статус: відкрито</div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainMasterpage',
}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  // .page__header
  &__header {
    padding: 25px 0;
  }
  // .page__main
  &__main {
    flex: 1 1 auto;
  }
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  // .header__logo
  &__logo {
    img {
      max-width: 100%;
    }
  }
}
.menu {
  // .menu__list
  &__list {
    display: flex;
    align-items: center;
    column-gap: 15px;
    flex-wrap: wrap;
  }
  // .menu__link
  &__link {
    font-weight: 700;
    &.router-link-exact-active {
      color: #42b983;
    }
    &.router-link-active {
      color: #42b983;
    }
    &:hover {
      text-decoration: underline;
    }
  }
}
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 0;
}
</style>
