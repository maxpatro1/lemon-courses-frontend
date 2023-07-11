<template>
  <div class="chat chat-start">
    <div class="chat-image avatar">
      <div class="w-10 rounded-full">
        <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" />
      </div>
    </div>
    <div class="chat-header">
      Obi-Wan Kenobi
      <time class="text-xs opacity-50">{{comment.created_at}}</time>
    </div>
    <div class="chat-bubble">{{comment.text}}</div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    comment: {

    }
  }
}
</script>

<style scoped>

</style>