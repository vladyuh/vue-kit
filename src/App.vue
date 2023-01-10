<template>
  <div id="app">

    <top-bar/>

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

    <transition name="fade">
      <custom-modal
          v-if="isModalOpened && modalProps.name"
          :is-close-btn="modalProps.isCloseBtn"
          :class="`custom-modal--${modalProps.name}`"
      >
        <template v-slot:modalBody>
          <component
              :is="modalProps.component"
          />
        </template>
      </custom-modal>
    </transition>

  </div>
</template>

<script>
import TopBar from "@/components/top-bar";
import MobileMenu from "@/components/mobile-menu";
import mainFooter from "@/components/main-footer";
import customModal from "@/common-components/custom-modal";

export default {
  name: 'app',
  components: { MobileMenu, TopBar, mainFooter, customModal },
  data () {
    return {
      isPositionFixed: false,
      isMenuOpened: false,
      isModalOpened: false,
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
      ],
      modalProps: {
        type: Object,
        default: () => ({})
      }
    }
  },
  watch: {
    isPositionFixed: function () {
      this.isPositionFixed ? this.$bus.emit('set-position-fixed') : this.$bus.emit('remove-position-fixed')
    },
    modalProps (newValue) {
      if (newValue === {}) {
        this.$bus.emit('close-modal')
      }
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
    this.$bus.on('open-modal', this.openModal)
    this.$bus.on('close-modal', this.closeModal)
  },
  methods: {
    closeMobileMenu() {
      this.$bus.emit('close-mobile-menu')
    },
    openModal(props) {
      this.modalProps = props
      this.isModalOpened = true
      this.isPositionFixed = true
    },
    closeModal () {
      this.modalProps = {}
      this.isModalOpened = false
      this.isPositionFixed = false
    }
  }
}

</script>

<style lang="scss">
@import "assets/scss/main.scss";
</style>