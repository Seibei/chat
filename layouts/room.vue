<template>
  <v-app dark>
    <AlertMessage
      :snackbar="snackbar"
      :text="snackbarMessage"
    />
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list subheader>
        <v-subheader>Recent chat</v-subheader>
        <v-list-item
          v-for="user in users"
          :key="user.id"
          @click.prevent=""
        >
          <v-list-item-content>
            <v-list-item-title v-text="user.name" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      dark
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        class="mx-2"
        dark
        small
        tile
        fab
        @click="exit"
      >
        <v-icon dark>
          mdi-home
        </v-icon>
      </v-btn>
      <v-toolbar-title>Room: {{ user.room }}</v-toolbar-title>
    </v-app-bar>
    <v-content class="room-layout">
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AlertMessage from '../components/AlertMessage/index.vue'

export default {
  components: {
    AlertMessage
  },
  data: () => ({
    drawer: true,
    snackbar: false,
    snackbarMessage: ''
  }),
  computed: {
    ...mapState([
      'user',
      'users'
    ])
  },
  methods: {
    ...mapMutations([
      'clearUser'
    ]),
    exit () {
      this.$socket.emit('userLeft', this.user.id, () => {
        this.snackbar = true
        this.snackbarMessage = `${this.user.name} left chat`
        this.$router.push('/?message=leftChat')
        this.clearUser()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .room-layout {
    height: 100vh;
  }
</style>
