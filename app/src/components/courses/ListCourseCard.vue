<template>
  <div class="flex flex-row">
    <img class="w-20 h-20" :src="photoUrl" alt="Album">
    <div>
      <span class="card-title">{{title}}</span>
      <div class="my-2">Creator</div>
      <div class="flex flex-row justify-between">
        <span class="flex flex-row items-center gap-2"><IconStar/> {{average_grade}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import IconStar from '../icons/IconStar.vue'
import IconComment from '../icons/IconComment.vue'
export default {
  name: "ListCourseCard",
  components: { IconStar },
  props: {
    id: {
      type: Number,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    average_grade: {
      type: Number,
    },
    grades_quantity: {
      type: Number,
    },
    comments_quantity: {
      type: Number,
    },
    url: {
      type: String,
    },
    photoUrl: {
      type: String,
    }
  },
}
</script>

<style scoped>

</style>