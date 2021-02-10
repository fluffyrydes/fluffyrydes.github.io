<template>
  <form v-on:submit.prevent>
    <meeting-form class="row" v-for="meeting in meetings" :meeting="meeting" :key="meeting.id"/>
  </form>
</template>

<script>
import MeetingForm from "@/components/meeting-form";
export default {
  name: "itinerary",
  components: { MeetingForm },
  data () {
    return {
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
    }
  },
  methods: {
  }
}
</script>

<style scoped>
form {
  margin-bottom: 7rem;
}
</style>
