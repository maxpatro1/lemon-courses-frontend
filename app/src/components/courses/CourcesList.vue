<template>
  <div>
    <ul class="menu w-full rounded-box">
      <li v-for="course in courses" :key="course.id">
        <ListCourseCard
            :id="course.id"
            :title="course.title"
            :description="course.description"
            :photo-url="course.photo_url"
            :url="course.url"
            :average_grade="course.average_grade"
            :grades_quantity="course.grades_quantity"
            :comments_quantity="course.comments_quantity"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import ListCourseCard from "./ListCourseCard.vue";
export default {
  name: "CoursesList",
  components: {ListCourseCard},
  props: {
    courses: {

    }
  }
}
</script>

<style scoped>

</style>