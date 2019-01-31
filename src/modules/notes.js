import axios from 'axios'

const url = 'http://localhost:3000/notes'
export default {

  state: { // need an empty data structure for Vue to update properly
    status: '',
    selected: '',
    data: [{
      id: '',
      title: '',
      content: ''
    }
    ]
  },

  getters: {

    getNote: (state) => (id) => {
      return state.data.find(note => id === note.id)
    }
  },

  // actions
  actions: {

    fetchNotes ({ commit }) {
      commit('setStatus', 'FetchNotesPending')
      axios.get(url).then(response => {
        commit('setStatus', 'FetchNotesComplete')
        commit('setNotes', response.data)
      }).catch(error => {
        commit('setStatus', 'FetchNotesError')
        console.log(error)
      })
    },

    saveNote ({
      commit,
      state
    }, payload) {
      let i = state.data.findIndex(note => note.id === payload.id)
      if (i >= 0) {
        commit('setStatus', 'UpdateNotePending')
        axios.put(url + `/${payload.id}`, payload).then(response => {
          commit('setStatus', 'UpdateNotecomplete')
          commit('updateNote', payload)
        }).catch(error => {
          commit('setStatus', 'UpdateNoteError')
          console.log(error)
        })
      } else {
        const id = Math.ceil(Math.random() * 9999)
        commit('setStatus', 'AddNotePending')
        axios.post(url, payload).then(response => {
          commit('setStatus', 'AddNoteComplete')
          commit('addNote', { ...payload, id: id })
        }).catch(error => {
          commit('setStatus', 'AddNoteError')
          console.log(error)
        })
      }
    },

    deleteNote ({ commit }, id) {
      commit('setStatus', 'DeleteNotePending')
      axios.delete(url + `/${id}`).then(response => {
        commit('setStatus', 'DeleteNoteComplete')
        commit('deleteNote', id)
      }).catch(error => {
        commit('setStatus', 'DeleteNoteError')
        console.log(error)
      })
    }
  },

  // mutations - use array methods rather than direct assigning
  mutations: {

    selectNote (state, id = 'new') {
      state.selected = id
    },

    unselectNote (state) {
      state.selected = null
    },

    setStatus (state, payload) {
      state.status = payload
    },

    addNote (state, payload) {
      state.data.push(payload)
    },

    setNotes (state, payload) {
      state.data = payload
    },

    updateNote (state, payload) {
      let i = state.data.findIndex(note => note.id === payload.id)
      if (i >= 0) {
        state.data.splice(i, 1, payload)
      }
    },

    deleteNote (state, id) {
      let i = state.data.findIndex(note => note.id === id)
      if (i >= 0) {
        state.data.splice(i, 1)
      }
    }

  }
}
