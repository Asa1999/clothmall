export default {
  addcount(state, payload) {
    payload.count++
  },
  addcart(state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  }
}