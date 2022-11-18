<template>
  <div class="breadcrumbs">
    <ul class="breadcrumbs-list">
      <li
          v-for="item in items"
          :key="(item)"
          class="breadcrumb__item"
      >
        <router-link
            :to="item.href"
            v-html="item.text"
            :class="['breadcrumb__item', {'breadcrumb__item--active': item.active}]"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'breadcrumbs',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
  }
}
</script>

<style src="style.scss" lang="scss"></style>
