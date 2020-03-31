const state = () => ({
  user: {},
  messages: [],
  users: []
})

const mutations = {
  setUser (state, user) {
    state.user = user
  },
  clearUser (state) {
    state.user = {}
    state.messages = []
    state.users = []
  },
  SOCKET_newMessage (state, message) {
    state.messages.push(message)
  },
  SOCKET_updateUsers (state, users) {
    state.users = users
  }
}

export default {
  state,
  mutations
}
