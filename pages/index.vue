<template>
  <v-container
    class="fill-height"
    fluid
  >
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
