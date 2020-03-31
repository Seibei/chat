<template>
  <v-app dark>
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
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data: () => ({
    drawer: true
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
        this.$router.push('/?message=leftChat')
        this.clearUser()
      })
    }
  }
}
</script>
