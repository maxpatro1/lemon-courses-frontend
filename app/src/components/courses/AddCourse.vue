<template>
  <div class="flex flex-row justify-between mb-10">
    <div class="flex flex-col justify-center max-[320px]:mx-auto">
      <div>
        <h1 class="text-3xl font-bold">Добавление курса</h1>
      </div>
      <div class="my-3">
        <span>Вы можете сами добавить бесплатный курс и помочь нам, после того как он пройдет модерацию, станет отображаться в списках</span>
      </div>
      <div class="inline-flex w-full md:flex-row xl:justify-start xl:px-0">
        <div class="btn btn-neutral">+ Добавить курс</div>
      </div>
    </div>
    <div class="picture">
      <img src="https://www.kaggle.com/static/images/datasets/Datasets_landing_illo.png">
    </div>
  </div>
</template>

<script>
export default {
  name: "AddCourse"
}
</script>

<style scoped>
@media (max-width: 650px) {
  .picture {
    display: none;
  }
}

</style>