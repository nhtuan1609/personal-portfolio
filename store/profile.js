import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'

const db = firebase.firestore()

export const state = () => ({
  user: {},
  profile: {}
})

export const getters = {
  getUser(state) {
    return state.user
  },
  getHomeData(state) {
    return state.profile.home
  },
  getAboutData(state) {
    return state.profile.about
  },
  getSkillsData(state) {
    return state.profile.skills
  },
  getExperienceData(state) {
    return state.profile.experience
  },
  getEducationData(state) {
    return state.profile.education
  },
  getContactsData(state) {
    return state.profile.contacts
  }
}

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  clearAll(state) {
    state.user = {}
  }
}

export const actions = {
  // binding profile collection
  setProfileRef: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('profile', db.collection('profiles').doc(process.env.PROFILE_ID), { wait: true })
  }),
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
        // eslint-disable-next-line no-console
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
        // eslint-disable-next-line no-console
        console.log('Login error', error)
      })

    return isSuccess
  }
}
