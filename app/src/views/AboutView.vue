<template>
  <div class="about">
    <input type="text" v-model="course.title" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
    <input type="text" v-model="course.description" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
    <input type="text" v-model="course.photo_url" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
    <input type="text" v-model="course.url" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
    <button class="btn btn-accent" @click="save">Button</button>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      course: {
        title: '',
        description: '',
        url: '',
        photo_url: ''
      }
    }
  },
  methods: {
    save() {
      axios.post('http://localhost/api/course', this.course)
    }
  }
}
</script>
<style>

</style>
