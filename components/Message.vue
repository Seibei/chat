<template>
  <li class="message">
    <div
      v-if="name === 'admin'"
      class="author admin"
    >
      <p>{{ name }}:</p>
      <p>{{ text }}</p>
    </div>
    <div
      v-else
      class="author user"
      :class="{ owner }"
    >
      <p>{{ name }}:</p>
      <p>{{ text }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    name: String,
    text: String,
    owner: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
  .message {
    .author {
      display: flex;
      p {
        &:first-of-type {
          min-width: 100px;
          color: #b3422e;
        }
      }
    }
    .admin {
      color: gray;
    }
    .user {
      color: #b8b8b8;
      p {
        &:first-of-type {
          color: #255fdf;
        }
      }
    }
    .owner {
      p {
        &:last-of-type {
          font-weight: bold;
        }
      }
    }
  }
</style>
