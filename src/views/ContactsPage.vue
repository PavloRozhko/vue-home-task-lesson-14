<template>
  <info-masterpage>
    <template #default>
      <div class="contacts">
        <h1 class="contacts__title contacts__title--main">Наші контакти</h1>
        <h2 class="contacts__title">Електронна пошта:</h2>
        <ul class="contacts__list">
          <li class="contacts__item">
            Загальні питання: <a href="mailto:orbita-general@gmail.com">orbita-general@gmail.com</a>
          </li>
          <li class="contacts__item">
            Служба підтримки клієнтів: <a href="mailto:orbita-support@gmail.com">orbita-support@gmail.com</a>
          </li>
        </ul>
        <h2 class="contacts__title">Телефон:</h2>
        <ul class="contacts__list">
          <li class="contacts__item">Загальні питання: <a href="tel:380504508090">+380504508090</a></li>
          <li class="contacts__item">Телефон служби підтримки: <a href="tel:380504508191">+380504508191</a></li>
        </ul>
        <h2 class="contacts__title">Адреса:</h2>
        <ul class="contacts__list">
          <li class="contacts__item">
            Наш магазин розташований за адресою: вул. Прикладна, 123, місто Орбіта, Країна Гріхів, індекс 00001
          </li>
        </ul>
        <h2 class="contacts__title">Години роботи:</h2>
        <ul class="contacts__list">
          <li class="contacts__item">Понеділок - П'ятниця: 9:00 - 18:00</li>
          <li class="contacts__item">Субота - Неділя: за попередньою домовленістю</li>
        </ul>
        <p class="contacts__text">
          Не соромтеся звертатися до нас з будь-якими питаннями чи пропозиціями. Ми вдячні за ваш інтерес до наших
          товарів і послуг. Бажаємо вам приємного дня!
        </p>
      </div>
    </template>
  </info-masterpage>
</template>

<script>
import InfoMasterpage from '@/masterpages/InfoMasterpage.vue'
export default {
  name: 'ContactsPage',
  components: {
    InfoMasterpage,
  },
}
</script>

<style lang="scss" scoped>
.contacts {
  padding: 20px 0;
  // .contacts__title
  &__title {
    font-weight: 700;
    margin-bottom: 20px;
  }
  // .contacts__title--main
  &__title--main {
    font-size: 32px;
    text-align: center;
    margin-bottom: 30px;
  }
  // .contacts__list
  &__list {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
  // .contacts__item
  &__item {
    a {
      color: green;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
