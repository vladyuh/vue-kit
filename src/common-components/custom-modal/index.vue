<template>
  <div
      :class="[
          'custom-modal',
          customClass ? customClass : ''
      ]"
      ref="customModal"
  >
    <div class="custom-modal__overlay" @click="closeOutside($event)"></div>
    <div class="custom-modal__inner" v-bar>
      <div class="custom-modal__inner-wr">
        <div
            v-if="isCloseBtn"
            class="custom-modal__close"
            @click="$bus.emit('close-modal')"
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
  methods: {
    closeOutside (event) {
      if (event.target === event.currentTarget) {
        this.$bus.emit('close-modal')
      }
    }
  }
}
</script>

<style src="./style.scss" lang="scss"/>