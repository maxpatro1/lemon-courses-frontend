<template>
  <div class="navbar w-full">
    <div class="flex flex-1 md:gap-1 lg:gap-2">
      <a class="flex-0 btn btn-ghost gap-1 px-2 md:gap-2">
        <div class="font-title inline-flex text-lg md:text-2xl">
          <span class="lowercase">lemon</span>
          <span class="uppercase text-[#1AD1A5]">CS</span>
        </div>
      </a>
    </div>
    <div class="flex-0">
      <div class="hidden flex-none items-center lg:block">
        <a class="btn btn-ghost drawer-button font-normal normal-case">
          Login
        </a>
      </div>
      <div class="hidden flex-none items-center lg:block">
        <a class="btn btn-ghost drawer-button font-normal normal-case">
          Registration
        </a>
      </div>
      <LanguageDropdown/>
    </div>
  </div>
</template>

<script>
import LanguageDropdown from "./LanguageDropdown.vue";
import IconPerson from "../icons/IconPerson.vue";
export default {
  name: "MainHeader",
  components: {IconPerson, LanguageDropdown}
}
</script>

<style scoped>

</style>