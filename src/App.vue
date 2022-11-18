<template>
  <div id="app">

    <top-bar></top-bar>

    <transition
        name="slide-left"
    >
      <mobile-menu
          ref="mobileMenu"
          :links="mobileMenuLinks"
          v-if="isMenuOpened"
      />
    </transition>

    <transition name="fade">
      <div
          v-if="isMenuOpened"
          class="mobile-menu__overlay"
          @click="closeMobileMenu"
      />
    </transition>

    <main class="main">
      <router-view/>
    </main>

    <main-footer/>

  </div>
</template>

<script>

import TopBar from "@/components/top-bar";
import MobileMenu from "@/components/mobile-menu";
import mainFooter from "@/components/main-footer";

export default {
  name: 'app',
  components: { MobileMenu, TopBar, mainFooter },
  data () {
    return {
      isPositionFixed: false,
      isMenuOpened: false,
      mobileMenuLinks: [
        {
          iconName: "ic_apps",
          label: "Пункт 1",
          href: "/"
        },
        {
          label: "Пункт 2",
          href: "/"
        },
        {
          label: "Пункт 3",
          href: "/"
        },
        {
          label: "Пункт 4",
          href: "/"
        },
        {
          label: "Пункт 5",
          href: "/"
        },
        {
          label: "Пункт 6",
          href: "/"
        },
        {
          label: "Пункт 7",
          href: "/"
        }
      ]
    }
  },
  watch: {
    isPositionFixed: function () {
      this.isPositionFixed ? this.$bus.emit('set-position-fixed') : this.$bus.emit('remove-position-fixed')
    }
  },
  mounted () {
    this.$bus.on('set-position-fixed', () => {
      this.isPositionFixed = true
      document.querySelector('body').classList.add('overflow--hidden')
    })
    this.$bus.on('remove-position-fixed', () => {
      this.isPositionFixed = false
      document.querySelector('body').classList.remove('overflow--hidden')
    })
    this.$bus.on('open-mobile-menu', () => {
      this.isMenuOpened = true
      this.isPositionFixed = true
    })
    this.$bus.on('close-mobile-menu', () => {
      this.isMenuOpened = false
      this.isPositionFixed = false
    })
  },
  methods: {
    closeMobileMenu() {
      this.$bus.emit('close-mobile-menu')
    }
  }
}

</script>

<style lang="scss">
@import "assets/scss/main.scss";
</style>