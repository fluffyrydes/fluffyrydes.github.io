<template>
    <header >

        <div v-if="extraHeader">
            <div class="site-logo">Fluffy Rydes  </div>

            <div class="row column medium-8 large-6 xlarge-5 xxlarge-4">
            <h1 class="">{{title}}</h1>
            <p class="content">
                {{content}}
            </p>
            </div>
        </div>

        <h1  v-show="showTitle" class="title">Fluffy Rydes</h1>
        <nav  id="nav"  v-show="isOpen" class="site-nav">
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/unicorns">Meet the Unicorns</router-link></li>
                <li><router-link to="/investors">Investors &amp; Board of Directors</router-link></li>
                <li><router-link to="/faq">FAQ</router-link></li>
                <li> <router-link to="/apply">Apply</router-link> </li>
            </ul>
        </nav>
        <div :class="menuStatus">
            <button @click='toggle()' type="button" class="btn-menu"><span>Menu</span></button>
        </div>
        <button v-show="showTitle" class="home-button" @click="showModal = true">Giddy Up!</button>
        <modal v-if="showModal" @close="showModal = false">
          <template v-slot:header>
            <h3>🎉 Congratulations 🎉</h3>
          </template>
          <template v-slot:body>
            You found a meeting ID! Make sure to enter it into the right input to retrieve a link to your meeting:
            {{ meetings[0].id }}
          </template>
        </modal>
    </header>
</template>

<script>
import {mapState} from "vuex";
import Modal from "@/components/modal";

export default {
  name: 'menu',
  components: {Modal},
  props: ['showTitle','extraHeader','title', 'content','logoColor'],
  data () {
      return {
            isOpen: false,
            menuStatus:'',
            showModal: false
      }
    },
  computed: mapState(['meetings']),
  methods: {
    toggle: function () {
       this.isOpen = !this.isOpen
       if(!this.menuStatus){
        this.menuStatus="menu-opened"
       }else{
         this.menuStatus=""
        }
    }
  }
}

</script>
