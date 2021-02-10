import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    meetings: [
      {
        label: "Ryde to more professional charisma",
        id: "ZpE3MDVhZjYtZmUxMC00OTgyLWIwNGUtNzRjNzZjZWE1OGF",
        input: "",
        time: "17.45",
      },
      {
        label: "Ryde to your next assignment",
        id: "ZjEoMDVhZjYtZmUxMC00OTgyLWIwNGUtNzRjNzZjZWE1OGF",
        input: "",
        time: "18.15",
      },
      {
        label: "Ryde to feedback land",
        id: "ZjE3MDVhZjYtZmUxMC00OTgyLWIwNGUtNzRjNzZjZWE1OGF",
        input: "",
        time: "19.00",
      },
    ]
  },
  mutations: {

  },
  actions: {

  }
})
