<template>
  <div class="container mx-auto px-3">
    <AddCourse/>
    <input type="text" placeholder="Поиск" v-model="searchValue" class="input input-bordered input-primary w-full" />
    <div v-if="searchValue">
      <CoursesList :courses="courses"/>
    </div>
    <div v-else>
      <CategoriesWithCourses :courses="courses"/>
      <CategoriesWithCourses :courses="courses"/>
      <CategoriesWithCourses :courses="courses"/>
    </div>
</div>

</template>

<script>
import axios from "axios";
import CategoriesWithCourses from "../components/courses/CategoriesWithCourses.vue";
import CoursesList from "../components/courses/CourcesList.vue";
import AddCourse from "../components/courses/AddCourse.vue";

export default {
  name: 'TheWelcome',
  components: {AddCourse, CoursesList, CategoriesWithCourses},
  data() {
    return {
      courses: [],
      searchValue: ''
    }
  },
  async created() {
    await this.fetchData()
  },
  methods: {
    async fetchData() {
      const { data } = await axios.get('http://localhost/api/course')
      this.courses = data
    }
  }
}
</script>
<style>
@media (max-width: 768px) {}
  .card-block {

  }
</style>
