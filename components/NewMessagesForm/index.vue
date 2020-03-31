<template>
  <v-form>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-text-field
            v-model="text"
            label="Message"
            solo
          />
        </v-col>
        <v-col>
          <v-btn
            large
            @click="send"
          >
            Send
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
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

<style lang="scss" scoped>

</style>
