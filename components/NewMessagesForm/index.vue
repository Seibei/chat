<template>
  <v-card class="new-message-form d-flex px-4">
    <v-row>
      <v-col class="align-center d-flex">
        <v-text-field
          v-model="text"
          label="Message"
          @keydown.enter="send"
        />
      </v-col>
      <v-col
        cols="2"
        class="align-center justify-center d-flex"
      >
        <v-btn
          large
          @click="send"
        >
          Send
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    text: ''
  }),
  methods: {
    send () {
      this.$socket.emit('createMessage', {
        text: this.text,
        id: this.$store.state.user.id
      }, data => {
        if (typeof data === 'string') {
          console.error(data)
        } else {
          this.text = ''
        }
      })
    }
  }
}
</script>
