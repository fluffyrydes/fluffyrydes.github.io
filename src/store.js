import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    meetings: [
      {
        label: "Ryde to more professional charisma",
        id: "ZTFjNzA3ZTgtOWVjYy00NDY0LTk3ZDItM2IwMWQ3ZDNmZDg5",
        input: "",
        time: "17.45",
      },
      {
        label: "Ryde to your next assignment",
        id: "YmVhZTlhZTQtZmYwOS00MjRhLWE0MDYtOTlkOTI4ZThkNDky",
        input: "",
        time: "18.15",
      },
      {
        label: "Ryde to feedback land",
        id: "ZjViMWJhOGYtZjJiMS00M2E4LTk1NzMtMGNlNmRhMGM3ZDcw",
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
