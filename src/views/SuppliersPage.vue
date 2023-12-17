<template>
  <main-masterpage>
    <div class="suppliers">
      <h1 class="suppliers__title">Наші постачальники</h1>
      <div class="suppliers__list">
        <card-item
          v-for="supplier in suppliersList"
          :key="supplier.id"
          :card-data="{
            src: supplier.imgSrc,
            title: supplier.title,
          }"
          class="suppliers__item"
        >
          <template #default>
            <div class="card__icons">
              <font-awesome-icon v-for="(icon, idex) in supplier.deliveryMethodIcons" :key="idex" :icon="icon" />
            </div>
          </template>
        </card-item>
      </div>
    </div>
    <template #left-footer> Найпопулярніший: Економ. </template>
  </main-masterpage>
</template>

<script>
import MainMasterpage from '@/masterpages/MainMasterpage.vue'
import CardItem from '@/components/CardItem.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'SuppliersPage',
  components: { MainMasterpage, CardItem },
  computed: {
    ...mapGetters('suppliers', ['suppliersList']),
  },
}
</script>

<style lang="scss" scoped>
.suppliers {
  // .suppliers__title
  &__title {
    font-weight: 700;
    text-align: center;
    font-size: 24px;
    margin-bottom: 25px;
  }
  // .suppliers__list
  &__list {
    display: flex;
    justify-content: center;
    column-gap: 35px;
  }
}
.card__icons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: green;
}
</style>
