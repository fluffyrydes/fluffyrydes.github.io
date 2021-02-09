<template>
  <form>
    <div class="row" v-for="meeting in meetings" :key="meeting.id">
      <label>
        <span class="time blink">{{ meeting.time }}</span>
        <span class="destination">{{ meeting.label }}</span>
        <input type="text" :placeholder="buildPlaceholder(meeting.id)" v-model="meeting.input">
      </label>
    </div>
  </form>
</template>

<script>
export default {
  name: "itinerary",
  data () {
    return {
      meetings: [
        {
          label: "Ryde to more professional charisma",
          id: "ZpE3MDVhZjYtZmUxMC00OTgyLWIwNGUtNzRjNzZjZWE1OGF",
          input: "",
          time: "17.45",
          isCorrect: false
        },
        {
          label: "Ryde to your next assignment",
          id: "ZjEoMDVhZjYtZmUxMC00OTgyLWIwNGUtNzRjNzZjZWE1OGF",
          input: "",
          time: "18.15",
          isCorrect: false
        },
        {
          label: "Ryde to feedback land",
          id: "ZjE3MDVhZjYtZmUxMC00OTgyLWIwNGUtNzRjNzZjZWE1OGF",
          input: "",
          time: "19.00",
          isCorrect: false
        },
      ]
    }
  },
  methods: {
   buildTeamsLink: id => {
     return "https://teams.microsoft.com/l/meetup-join/19%3ameeting_" + id + "m%40thread.v2"
  },
    buildPlaceholder: id => {
     return "Meeting ID: " + id.slice(0, 8) + "🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄"
    }
  }
}
</script>

<style scoped>
form input {
  background: #333;
  border: 1px solid transparent;
  color: #fff;
  border-radius: 40px;
  height: 3.4375rem;
  padding: 1.875rem;
  margin: 0.75rem;
  outline: none;
  width: 100%
}

form {
  margin-bottom: 7rem;
}

label .destination {
  font-weight: bold;
}

label .time {
  color: deepskyblue;
  font-weight: bold;
  margin-right: 10px;
}

.blink {
  animation: blinker 0.5s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
