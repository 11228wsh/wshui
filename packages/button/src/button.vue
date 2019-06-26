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
  .wsh-button{display: inline-block;line-height: 1;white-space: nowrap;cursor: pointer;background: #fff;
    border: 1px solid #dcdfe6;color: #606266;-webkit-appearance: none;text-align: center;
    box-sizing: border-box;outline: none;margin: 0;transition: .1s;font-weight: 500;
    -moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;
    padding: 12px 20px;font-size: 14px;border-radius: 4px;}
  .wsh-button--small{padding: 9px 15px;}
  .wsh-button--medium{padding: 10px 20px;}

  .wsh-button--success{color: #fff;background-color: #67c23a;border-color: #67c23a;}
  .wsh-button--danger{color: #fff;background-color: #f56c6c;border-color: #f56c6c;}

  .wsh-button:focus,.wsh-button:hover{color:#409EFF;border-color:#c6e2ff;background-color:#ecf5ff}
  .wsh-button:active{color:#3a8ee6;border-color:#3a8ee6;outline:0}
  .wsh-button--success:focus,.wsh-button--success:hover{background:#85ce61;border-color:#85ce61;color:#FFF}
  .wsh-button--success.is-active,.wsh-button--success:active{background:#5daf34;border-color:#5daf34;color:#FFF}
  .wsh-button--success:active{outline:0}
  .wsh-button--danger:focus,.wsh-button--danger:hover{background:#f78989;border-color:#f78989;color:#FFF}
  .wsh-button--danger.is-active,.wsh-button--danger:active{background:#dd6161;border-color:#dd6161;color:#FFF}
  .wsh-button--danger:active{outline:0}
</style>