<template>
  <div class="checkbox-modal">
    <h3>Выберите вариант</h3>
    <checkbox
        label="1 вариант"
    />
    <checkbox
        label="2 вариант"
    />
    <checkbox
        label="3 вариант"
    />
    <checkbox
        label="4 вариант"
    />
  </div>
</template>

<script>
import checkbox from "@/common-components/checkbox";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "checkbox-modal",
  components: {
    checkbox,
  },
}

</script>

<style src="./style.scss" lang="scss"/>