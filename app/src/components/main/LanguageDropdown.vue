<template>
  <div title="Change Language" class="dropdown dropdown-end">
    <div tabindex="0" class="btn btn-ghost normal-case">
      <IconTranslate/>
    </div>
    <div class="dropdown-content bg-base-200 text-base-content rounded-box top-px mt-16 w-56 overflow-y-auto shadow">
      <ul class="menu menu-sm gap-1" tabindex="0">
        <li>
          <button class="active">
          <img class="drop-shadow" loading="lazy" alt="English" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1ec-1f1e7.svg" width="20" height="20">
            English
          </button>
        </li>
        <li>
          <button>
            <img class="drop-shadow" loading="lazy" alt="Русский" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1f7-1f1fa.svg" width="20" height="20">
            Русский
        </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import IconTranslate from "../icons/IconTranslate.vue";
export default {
  name: "LanguageDropdown",
  components: {IconTranslate}
}
</script>

<style scoped>

</style>