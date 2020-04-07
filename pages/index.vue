<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-snackbar
      v-model="snackbar"
      color="info"
      multi-line="multi-line"
      :timeout="4000"
      top
    >
      {{ message }}
      <v-btn
        dark
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
        <RegistrationForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import RegistrationForm from '../components/RegistrationForm/index.vue'

export default {
  components: {
    RegistrationForm
  },
  layout: 'start',
  data: () => ({
    snackbar: false,
    message: ''
  }),
  mounted () {
    const { message } = this.$route.query
    if (message === 'noUser') {
      this.message = 'Please log in'
    } else if (message === 'leftChat') {
      this.message = 'You have been left chat!'
    }
    this.snackbar = !!this.message
  },
  sockets: {
    connect () {
      console.log('socket connected')
    }
  },
  head () {
    return {
      title: 'Registration'
    }
  }
}
</script>
