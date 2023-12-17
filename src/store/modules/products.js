function isCorespondentToSearch(item, searchText) {
  if (searchText) {
    if (searchText.toLowerCase() !== item.toLowerCase()) return false
  }
  return true
}

export default {
  namespaced: true,
  state: {
    productsList: [
      {
        id: 1,
        title: 'Спагеті',
        price: 52,
        imgSrc: 'https://content2.rozetka.com.ua/goods/images/big/60556987.jpg',
      },
      {
        id: 2,
        title: 'Сир Чеддер',
        price: 298,
        imgSrc: 'https://content2.rozetka.com.ua/goods/images/big/180512103.png',
      },
      {
        id: 3,
        title: 'Салямі',
        price: 665,
        imgSrc: 'https://content1.rozetka.com.ua/goods/images/big/39212067.png',
      },
      {
        id: 4,
        title: 'Хліб',
        price: 32,
        imgSrc: 'https://content1.rozetka.com.ua/goods/images/big/173133475.png',
      },
    ],
    searchedText: null,
  },
  getters: {
    productsList: (state) => state.productsList,
    filteredProductsList: (state) =>
      state.productsList.filter((product) => isCorespondentToSearch(product.title, state.searchedText)),
  },
  mutations: {
    addProduct(state, productObj) {
      state.productsList.push(productObj)
    },
    setSearchedText(state, text) {
      state.searchedText = text
    },
  },
  actions: {
    addProduct({ commit }, product) {
      commit('addProduct', {
        id: Date.now(),
        ...product,
      })
    },
    setSearchedText({ commit }, text) {
      commit('setSearchedText', text)
    },
  },
}
