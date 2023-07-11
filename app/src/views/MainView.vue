<template>
  <div class="flex min-h-[calc(100vh-4rem)] items-center justify-center px-2 py-10 text-center xl:justify-start xl:pl-10 xl:pr-0 xl:text-left">
    <div>
      <h1 class="font-title text-center text-[clamp(2rem,6vw,4.2rem)] font-black leading-[1.1] xl:text-left">
        <span class="inline-grid">
          <span class="[&amp;::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&amp;::selection]:bg-blue-700/20 [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)]">Lemon Courses</span>
          <span class="pointer-events-none col-start-1 row-start-1 bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text opacity-70 blur-3xl [-webkit-text-fill-color:transparent] [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)]" aria-hidden="true">
          </span>
        </span>
        <br/>
        <span class="[&::selection]:text-base-content brightness-150 contrast-150 [&::selection]:bg-blue-700/20">
            популярный сток
        </span>
        <br/>
        <span class="[&::selection]:text-base-content brightness-150 contrast-150 [&::selection]:bg-blue-700/20">
            бесплатных курсов
        </span>
      </h1>
      <div class="h-4"></div>
      <p class="text-base-content/60 font-title py-4 font-light md:text-lg xl:text-2xl">
        Платформа предзначена для поиска <span class="border-base-content/20 border-b-2">бесплатного курса в любой сфере</span>
      </p>
      <div class="h-10"></div>
      <div class="inline-flex w-full flex-col items-stretch justify-center gap-2 px-4 md:flex-row xl:justify-start xl:px-0">
        <router-link class="btn btn-neutral md:btn-lg md:btn-wide group px-12 normal-case" to="/courses">Поиск курса</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from "../components/main/MainHeader.vue";
export default {
  name: "MainView",
  components: { MainHeader }
}
</script>

<style scoped>

</style>