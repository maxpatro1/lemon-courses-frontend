<template>
  <router-link :to="`/course/${id}`">
    <div class="card lg:card-side bg-base-100 shadow-xl h-full">
      <figure>
        <img class="h-full" :src="photoUrl" alt="Album"/>
      </figure>
      <div class="card-body">
        <div class="badge badge-secondary">{{getSiteName}}</div>
        <h2 class="card-title">{{title}}</h2>
        <p class="w-64 h-28 overflow-hidden text-overflow-ellipsis">{{description}}</p>
        <div class="flex flex-row justify-between">
          <span class="flex flex-row items-center gap-2"><IconStar/> {{average_grade}}</span>
          <span class="flex flex-row items-center gap-2"><IconComment/> {{comments_quantity}}</span>
        </div>

  <!--      <div class="card-actions justify-end">-->
  <!--        <button class="btn btn-primary" @click="$router.push('/users/eduardo')">Listen</button>-->
  <!--      </div>-->
      </div>
    </div>
  </router-link>
</template>

<script>
import IconStar from "../icons/IconStar.vue";
import IconComment from "../icons/IconComment.vue";
const POPULAR = [
    'stepik',
    'coursera'
]
export default {
  name: "CourseCard",
  components: {IconComment, IconStar},
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
  computed: {
    getSiteName() {
      for (let i=0; i<POPULAR.length; i++) {
        if (this.url.search(POPULAR[i]) !== -1) return POPULAR[i];
      }
      return ''
    }
  }
}
</script>

<style scoped>
.text-container {
  width: 200px; /* Задайте нужную ширину для <div> */
  white-space: nowrap; /* Запретить перенос строк */
  overflow: hidden; /* Скрыть содержимое, которое выходит за пределы */
  text-overflow: ellipsis; /* Добавить многоточие */
}
</style>