<template>
  <div :class="['wsh-input', inputSize ? 'wsh-input--' + inputSize : '']">
    <input
      v-if="type !== 'textarea'"
      class="wsh-input__inner"/>

    <textarea
    v-else
    class="wsh-textarea__inner">
    </textarea>
  </div>
</template>

<script>
export default {
  name: 'WshInput',

  data () {
    return {

    }
  },

  props: {
    type: {
      type: String,
      default: 'text'
    },
    size: String
  },

  computed: {
    inputSize () {
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
  @import '../../../src/theme-chalk/input.css';
</style>
