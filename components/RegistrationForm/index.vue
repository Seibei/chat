<template>
  <v-card class="elevation-12">
    <v-toolbar>
      <v-toolbar-title>Registration from</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
        />
        <v-text-field
          v-model="room"
          :counter="10"
          :rules="roomRules"
          label="Room"
          required
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn
        :disabled="!valid"
        @click="submit"
      >
        Registration
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data: () => ({
    valid: true,
    name: '',
    room: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    roomRules: [
      v => !!v || 'Room is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ]
  }),
  methods: {
    ...mapMutations([
      'setUser'
    ]),
    submit () {
      if (this.$refs.form.validate()) {
        const user = {
          name: this.name,
          room: this.room
        }
        this.$socket.emit('addUser', user, data => {
          if (typeof data === 'string') {
            console.error(data)
          } else {
            user.id = data.userId
            this.setUser(user)
            this.$router.push('/chat')
          }
        })
      }
    }
  }
}
</script>
