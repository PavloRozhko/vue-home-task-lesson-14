export default {
  namespaced: true,
  state: {
    suppliersList: [
      {
        id: 1,
        title: 'Політ',
        imgSrc: 'https://pngbuy.com/wp-content/uploads/2023/08/butterfly-png-3-400x400.png',
        deliveryMethodIcons: [
          ['fas', 'plane'],
          ['fas', 'car'],
        ],
      },
      {
        id: 2,
        title: 'Надійність',
        imgSrc:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Superman_shield.svg/1280px-Superman_shield.svg.png',
        deliveryMethodIcons: [
          ['fas', 'plane'],
          ['fas', 'car'],
          ['fas', 'motorcycle'],
        ],
      },
      {
        id: 3,
        title: 'Швидка',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/uk/6/66/Detroit_Red_Wings.png',
        deliveryMethodIcons: [
          ['fas', 'car'],
          ['fas', 'bicycle'],
          ['fas', 'motorcycle'],
        ],
      },
      {
        id: 4,
        title: 'Економ',
        imgSrc: 'https://www.psdstamps.com/wp-content/uploads/2019/11/grunge-best-price-label-png.png',
        deliveryMethodIcons: [
          ['fas', 'bicycle'],
          ['fas', 'motorcycle'],
        ],
      },
    ],
  },
  getters: {
    suppliersList: (state) => state.suppliersList,
  },
  mutations: {},
  actions: {},
}
