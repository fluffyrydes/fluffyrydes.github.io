<template>
  <label>
    <span class="destination blink">{{ meeting.label }}</span>
    <input class="meeting" v-if="!isCorrect" type="text" :placeholder="placeholder" v-model.trim="meeting.input">
    <button class="meeting meeting-button" v-else @click="openMeeting">
      <span>🏁 Take me there 🏁</span>
    </button>
  </label>
</template>

<script>
export default {
  name: "meeting-form",
  props: ["meeting"],
  computed: {
    teamsLink () {
      return "https://teams.microsoft.com/l/meetup-join/19%3ameeting_" + this.meeting.id + "m%40thread.v2/0?context=" + this.meeting.context
    },
    isCorrect () {
      return this.meeting.input === this.meeting.id
    },
    placeholder () {
      return "Meeting ID: " + this.meeting.id.slice(0, 8) + "🦄".repeat(this.meeting.id.length - 8)
    }
  },
  methods: {
    openMeeting () {
      console.log(this.teamsLink)
      window.open(this.teamsLink)
    }
  }
}
</script>

<style scoped>
.meeting {
  background: #333;
  border: 1px solid transparent;
  border-radius: 40px;
  height: 3.4375rem;
  padding: 1.875rem;
  margin: 0.75rem;
  outline: none;
  width: 100%;
  color: #fff;
}

.meeting-button {
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  background: linear-gradient(#4c5158, #333333);
  box-shadow: 1px 1px 1px 0 #4c5158;
  line-height: 0;
}

.meeting-button:hover {
  border: solid black 1px;
  background: #333333;
  background: linear-gradient(#46464a, #333333);
}

label .destination {
  color: deepskyblue;
  font-weight: bold;
  margin-right: 10px;
}

.blink {
  animation: blinker 1.5s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
