<template>
  <div v-if="course" class="container mx-auto">
    <div class="flex flex-row">
      <div>
        <img :src="course.photo_url" alt="Album" class="h-full">
      </div>
      <div class="mx-10">
        <h1 class="text-3xl font-bold mb-3">{{course.title}}</h1>
        <span>{{course.description}}</span>
        <br/>
        <div></div>
        <div class="mt-10 flex flex-row items-center">
          <span><IconRedactor/></span>
          <a :href="course.url" target="_blank"  class="link link-primary">
            <span>{{course.url}}</span>
          </a>
        </div>
      </div>
    </div>
    <div>
      <CourseStat/>
    </div>
    <div class="mt-3">
      <textarea v-model="commentText" class="textarea textarea-primary w-full mt-2" placeholder="Комметарий"></textarea>
      <div class="btn btn-accent w-full mt-3" @click="saveComment">Отправить</div>
    </div>
    <div class="mt-3">
      <h1>Комметарии:</h1>
      <div v-for="comment in comments" :key="comment.id">
        <Comment :comment="comment"/>
      </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";
import IconRedactor from "../icons/IconRedactor.vue";
import CourseStat from "./CourseStat.vue";
import Comment from "./Comment.vue";

export default {
  name: "Course",
  components: {Comment, CourseStat, IconRedactor},
  data() {
    return {
      commentText: null,
      course: null,
      comments: null
    }
  },
  async mounted() {
    await this.fetchData()
    await this.fetchComments()
  },
  methods: {
    async fetchData() {
      const { data } = await axios.get(`http://localhost/api/course/${this.courseId}`)
      this.course = data
    },

    async fetchComments() {
      const { data } = await axios.get(`http://localhost/api/comments/${this.courseId}`)
      this.comments = data
    },

    async saveComment() {
      await axios.post('http://localhost/api/comment', {
        user_id: 1,
        course_id: this.courseId,
        text: this.commentText
      })
      await this.fetchComments()
    }
  },
  computed: {
    courseId() {
      return this.$route.fullPath.split('/')[2]
    }
  }
}
</script>

<style scoped>

</style>