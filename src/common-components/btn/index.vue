<template>
  <button
    :class="['btn', {
      'btn--no-rounded': noRounded,
      'btn--loading': spinner,
      'btn--success': success,
      'btn--secondary': secondary
    }]"
    :style="`color: ${fontColor}; background-color: ${bgColor};`"
    :type="type"
    :disabled="disabled"
    @click="clickHandler($event)"
  >
    <span class="btn__bg" />
    <span
      :class="[
        'btn__text',
        { 'btn__text--loading': spinner }
      ]"
    >
      <slot />
    </span>
    <slot name="count" />
  </button>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'btn',
  props: {
    spinner: Boolean,
    threeColor: Boolean,
    noRounded: Boolean,
    lg: Boolean,
    middle: Boolean,
    small: Boolean,
    styleNormal: Boolean,
    notUppercase: Boolean,
    bgColor: String,
    fontColor: String,
    secondary: Boolean,
    info: Boolean,
    warning: Boolean,
    success: Boolean,
    gray: Boolean,
    dark: Boolean,
    bordered: Boolean,
    disabled: {
      type: Boolean,
      default: false
    },
    stopPropagation: Boolean,
    type: {
      type: String,
      default: 'button'
    }
  },
  methods: {
    clickHandler (e) {
      if (this.stopPropagation) {
        e.stopPropagation()
      }

      this.$emit('click', e)
    }
  }
}
</script>

<style src="./style.scss" lang="scss"></style>
