<template>
  <button
    @click="handleClick"
    :class="[
      'wsh-button',
      type ? 'wsh-button--' + type: '',
      buttonSize ? 'wsh-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-plain': plain,
        'is-round': round
      }
    ]"
  >
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
    size: String,
    disabled: Boolean,
    plain: Boolean,
    round: Boolean
  },

  computed: {
    buttonSize () {
      return this.size
    },
    buttonDisabled () {
      return this.disabled || (this.elForm || {}).disabled;
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
  @import '../../../src/theme-chalk/button.css';
</style>