<template>
  <button
    @click="handleClick"
    :class="[
      'wsh-button',
      buttonSize ? 'wsh-button--' + buttonSize : '',
      type ? 'wsh-button--' + type: '']">
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'WshButton',

  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String
  },

  computed: {
    buttonSize () {
      return this.size
    }
  },

  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }

}
</script>

<style>
  @import '../../../lib/theme-chalk/button.css';
</style>