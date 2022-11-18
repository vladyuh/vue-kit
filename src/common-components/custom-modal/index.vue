<template>
  <div
      v-if="isOpen"
      :class="[
          'custom-modal',
          customClass ? customClass : ''
      ]"
      ref="customModal"
  >
    <div class="custom-modal__overlay"></div>
    <div class="custom-modal__inner">
      <div
          v-if="isCloseBtn"
          class="custom-modal__close"
          @click="isOpen = !isOpen"
      >
        <icon
          icon-name="ic_close"
          width="24"
          height="24"
        />
      </div>
      <div class="custom-modal__content">
        <slot name="modalHeader"></slot>
        <slot name="modalBody"></slot>
        <slot name="modalFooter"></slot>
      </div>
    </div>
  </div>
</template>

<script>

import icon from "@/common-components/icon";

export default {
  name: 'custom-modal',
  components: {
    icon
  },
  props: {
    isCloseBtn: Boolean,
    customClass: String
  },
  data () {
    return {
      isOpen: Boolean
    }
  },
  computed: {},
  mounted () {
    this.$bus.on('close-modal', () => {
      this.isOpen = !this.isOpen
    })
    this.$refs.customModal.isOpen = true
  },
  methods: {
  }
}
</script>

<style src="./style.scss" lang="scss"></style>