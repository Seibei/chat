<template>
  <div>
    <ul class="chat-field pa-6">
      <Message
        v-for="(message, index) in messages"
        :key="index"
        :name="message.name"
        :text="message.text"
        :owner="message.id === user.id"
      />
    </ul>
    <NewMessagesForm />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Message from '../components/Message.vue'
import NewMessagesForm from '../components/NewMessagesForm/index.vue'

export default {
  components: {
    Message,
    NewMessagesForm
  },
  middleware: ['chat'],
  computed: {
    ...mapState([
      'user',
      'messages'
    ])
  },
  head () {
    return {
      title: this.user.room
    }
  }
}
</script>
