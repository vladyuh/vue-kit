<template>
  <header class="top-bar">
    <div class="container top-bar__container">
      <burger
          class="top-bar__burger"
          @click="burgerClick"
      />
    </div>
  </header>
</template>

<script>

import burger from "@/common-components/burger";

export default {
  name: "top-bar",
  components: {
    burger
  },
  methods: {
    burgerClick () {
      this.$bus.emit('open-mobile-menu')
    }
  }
}

</script>

<style src="./style.scss" lang="scss"></style>