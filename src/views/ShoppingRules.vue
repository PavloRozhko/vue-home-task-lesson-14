<template>
  <info-masterpage>
    <template #default>
      <div class="rules">
        <h1 class="rules__title">Правила купівлі в нашому магазині</h1>
        <div class="rules__text">
          <ol class="rules__ordered-list">
            <li class="rules__ordered-item">
              Оформлення замовлення:
              <ul class="rules__unordered-list">
                <li class="rules__unordered-item">
                  Додайте бажані товари до кошика та перевірте їхню кількість та характеристики перед оформленням
                  замовлення.
                </li>
                <li class="rules__unordered-item">Вкажіть точні та коректні контактні дані для доставки.</li>
              </ul>
            </li>
            <li class="rules__ordered-item">
              Оплата:
              <ul class="rules__unordered-list">
                <li class="rules__unordered-item">Оберіть зручний для вас метод оплати.</li>
                <li class="rules__unordered-item">Здійснюйте оплату лише через безпечні платіжні системи.</li>
              </ul>
            </li>
            <li class="rules__ordered-item">
              Підтвердження замовлення:
              <ul class="rules__unordered-list">
                <li class="rules__unordered-item">
                  Після оформлення замовлення отримаєте електронний лист з підтвердженням.
                </li>
                <li class="rules__unordered-item">
                  Перевірте інформацію та звертайтеся до нас у випадку будь-яких непорозумінь.
                </li>
              </ul>
            </li>
            <li class="rules__ordered-item">
              Доставка:
              <ul class="rules__unordered-list">
                <li class="rules__unordered-item">Вкажіть точний адреса доставки.</li>
                <li class="rules__unordered-item">
                  Слідкуйте за статусом вашого замовлення через систему відстеження, яку ми надаємо.
                </li>
              </ul>
            </li>
            <li class="rules__ordered-item">
              Повернення та обмін:
              <ul class="rules__unordered-list">
                <li class="rules__unordered-item">Ознайомтеся з умовами повернення та обміну перед покупкою.</li>
                <li class="rules__unordered-item">
                  Повідомте нас про будь-які виявлені недоліки або пошкодження протягом приймання товару.
                </li>
              </ul>
            </li>
            <li class="rules__ordered-item">
              Безпека:
              <ul class="rules__unordered-list">
                <li class="rules__unordered-item">
                  Не передавайте свої особисті дані чи інформацію про платіж нашим співробітникам або третім особам.
                </li>
                <li class="rules__unordered-item">
                  Зберігайте свої дані авторизації в таємниці та не дозволяйте їх використовувати іншим особам.
                </li>
              </ul>
            </li>
            <li class="rules__ordered-item">
              Служба підтримки:
              <ul class="rules__unordered-list">
                <li class="rules__unordered-item">
                  Звертайтеся до нашої служби підтримки у разі питань або проблем. Ми завжди готові допомогти вам.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </template>
  </info-masterpage>
</template>

<script>
import InfoMasterpage from '@/masterpages/InfoMasterpage.vue'
export default {
  name: 'ShoppingRules',
  components: {
    InfoMasterpage,
  },
}
</script>

<style lang="scss" scoped>
.rules {
  padding: 15px 0;
  // .rules__title
  &__title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 25px;
  }
  // .rules__text
  &__text {
    line-height: 1.2;
  }
  // .rules__ordered-item
  &__ordered-item {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
  // .rules__unordered-list
  &__unordered-list {
    padding-top: 10px;
    padding-left: 20px;
  }
  // .rules__unordered-item
  &__unordered-item {
    padding-left: 10px;
    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }
  &__unordered-item::marker {
    content: '🌌';
  }
}
</style>
