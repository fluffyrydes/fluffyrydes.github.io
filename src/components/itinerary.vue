<template>
  <form v-on:submit.prevent>
    <meeting-form class="row" v-for="meeting in meetings" :meeting="meeting" :key="meeting.id"/>
  </form>
</template>

<script>
import MeetingForm from "@/components/meeting-form";
import { mapState } from 'vuex'

export default {
  name: "itinerary",
  components: { MeetingForm },
  computed: mapState(['meetings'])
}
</script>

<style scoped>
form {
  margin-bottom: 7rem;
}
</style>
