<template>
  <div>
    <div class="h-4"></div>
    <h1 class="prose lg:prose-xl">Топ 10</h1>
    <div class="h-4"></div>
    <div class="flex gap-4 overflow-x-auto">
      <div class="grow mb-8" v-for="course in courses" :key="course.id">
        <CourseCard
            :id="course.id"
            :title="course.title"
            :description="course.description"
            :photo-url="course.photo_url"
            :url="course.url"
            :average_grade="course.average_grade"
            :grades_quantity="course.grades_quantity"
            :comments_quantity="course.comments_quantity"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CourseCard from "./CourseCard.vue";

export default {
  name: "CategoriesWithCourses",
  components: { CourseCard },
  props: {
    courses: {

    }
  }
}
</script>

<style scoped>

</style>