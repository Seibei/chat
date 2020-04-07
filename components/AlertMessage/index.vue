<template>
  <v-snackbar
    color="info"
    multi-line="multi-line"
    :timeout="2000"
    top
    :value="value"
    @input="$emit('input', $event.target.value)"
  >
    {{ text }}
    <v-btn
      dark
      text
      @click="snackbar = false"
    >
      Close
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  props: {
    // snackbar: {
    //   type: Boolean,
    //   default: false
    // },
    text: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    }
  }
}
</script>
