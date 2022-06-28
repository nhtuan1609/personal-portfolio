import firebase from '~/plugins/firebase'

const db = firebase.firestore()

export const state = () => ({
  user: {}
})

export const getters = {
  getUser(state) {
    return state.user
  }
}

export const mutations = {
  setUser(state, user) {
    state.user = user
  }
}

export const actions = {
  /**
   * login user
   * @param {object} state - local state
   * @param {object} rootGetters - getter function of store
   * @param {object} commit - action to update store
   * @param {object} params.email
   * @param {object} params.password
   * @return {void}
   */
  async login({ state, rootGetters, commit }, params) {
    let isSuccess = false
    await firebase
      .auth()
      .signInWithEmailAndPassword(params.user.email, params.user.password)
      .then(async (res) => {
        const usersRef = await db.collection('users').get()
        const currentUser = usersRef.docs.find((doc) => {
          const data = doc.data()
          return data.email === params.user.email
        })
        if (currentUser) {
          const data = currentUser.data()
          commit('setUser', data)
          isSuccess = true
        } else {
          const userRef = db.collection('users').doc(res.user.email)
          const data = {
            _created: firebase.firestore.FieldValue.serverTimestamp(),
            _updated: firebase.firestore.FieldValue.serverTimestamp(),
            email: res.user.email,
            name: 'Nguyen Hoang Tuan',
            shortName: 'T',
            color: '#FFC312'
          }
          await userRef.set(data).then(() => {
            commit('setUser', data)
            isSuccess = true
          })
        }
      })
      .catch((error) => {
        console.log('Login error', error)
      })

    return isSuccess
  },
  /**
   * logout
   * @param {object} state - local state
   * @param {object} rootGetters - getter function of store
   * @param {object} commit - action to update store
   * @return {void}
   */
  async logout({ state, rootGetters, commit }) {
    let isSuccess = false
    await firebase
      .auth()
      .signOut()
      .then(() => {
        commit('clearAll')
        isSuccess = true
      })
      .catch((error) => {
        console.log('Login error', error)
      })

    return isSuccess
  }
}
