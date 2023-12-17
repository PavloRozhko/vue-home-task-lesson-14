<template>
  <main-masterpage>
    <div class="home">
      <h1 class="home__title">Магазин продуктів "Орбіта"</h1>
      <p class="home__text">
        Вітаємо у нашому чудовому магазині продуктів – місці, де смак та якість поєднуються для найкращого досвіду
        шопінгу! У нас ви знайдете свіжі та високоякісні продукти, які не лише насичать ваші смакові рецептори, але й
        даруватимуть радість вашому столу.
      </p>
      <p class="home__text">
        Наша команда завжди готова допомогти вам знайти саме те, що вам потрібно. Від свіжих фруктів та овочів до
        найсмачніших десертів – ми маємо все для забезпечення вашого столу смачною та здоровою їжею.
      </p>
      <p class="home__text">
        Нехай кожна покупка у нас буде для вас особливою, а наші продукти дарують вам найсмачніші миті. Чекаємо на вас у
        нашому магазині, де гостинність та якість зустрінуть вас на кожному полиці!
      </p>
      <p class="home__text">З любов'ю, "Орбіта"!</p>
    </div>
    <template #right-footer>
      <div class="home__logo">
        <img src="../assets/img/logo.svg" alt="logo" />
      </div>
    </template>
  </main-masterpage>
</template>

<script>
import MainMasterpage from '@/masterpages/MainMasterpage.vue'
export default {
  name: 'HomePage',
  components: { MainMasterpage },
}
</script>
<style lang="scss">
.home {
  // .home__title
  &__title {
    font-size: 32px;
    font-weight: 700;
    &:not(:last-child) {
      margin-bottom: 25px;
    }
  }
  // .home__text
  &__text {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
}
</style>
