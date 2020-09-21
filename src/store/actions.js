export default {
  addToCar(context, payload) {
    return new Promise((resolve, reject) => {
      let product = context.state.cartList.find(function(item) {
        return item.iid === payload.iid
      })
      if (product) {
        context.commit('addcount',product)
        resolve('此商品数量+1')
      } else {
        payload.count = 1
        context.commit('addcart', payload)
        resolve('商品+1')
      }
    })
  
  }
}