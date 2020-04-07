<template>
  <div class="chat d-flex flex-column">
    <ul
      ref="block"
      class="chat-field mb-auto pa-6"
    >
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
  layout: 'room',
  middleware: ['chat'],
  computed: {
    ...mapState([
      'user',
      'messages'
    ])
  },
  watch: {
    messages (val) {
      setTimeout(() => {
        this.$refs.block.scrollTop = this.$refs.block.scrollHeight
      }, 0)
    }
  },
  head () {
    return {
      title: this.user.room
    }
  }
}
</script>

<style lang="scss" scoped>
  .chat {
    height: 100%;
    .chat-field {
      overflow-y: auto;
      flex-grow: 1;
    }
  }
</style>
