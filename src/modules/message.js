export default {

  state: {
    data: ''
  },

  // mutations - use array methods rather than direct assigning
  mutations: {

    setMessage (state, payload) {
      state.data = payload
    }
  }
}
