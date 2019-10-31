<!--
注意：具有交互功能的说明文档，需要有<script></script>标签，在标签元素中定义需要导出的vue实例。
在:::demo ::: 代码块中定义的模版<template></template>会作为导出的vue实例的模版，但是在代码块中的<script></script>中的内容仅作为展示，需注意。
-->
<script>
export default {
  data () {
    return {
      input: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      textarea: ''
    }
  }
}
</script>
<style>
  .wsh-input, .wsh-textarea{width: 180px !important;margin-right: 20px;}
</style>

## Input 输入框
通过鼠标或键盘输入字符

### 基础用法

:::demo
``` html
<template>
  <wsh-input v-model="input" placeholder="请输入内容"></wsh-input>
</template>

<script>
export default {
  data () {
    return {
      input: ''
    }
  }
}
</script>
```
:::

### 尺寸
自定义大小

:::demo 可通过 `size` 属性指定输入框的尺寸，除了默认的大小外，还提供了 `large`、`small` 和 `mini` 三种尺寸。
``` html
<div class="demo-input-size">
  <wsh-input
    placeholder="请输入内容"
    v-model="input1">
  </wsh-input>
  <wsh-input
    size="medium"
    placeholder="请输入内容"
    v-model="input2">
  </wsh-input>
  <wsh-input
    size="small"
    placeholder="请输入内容"
    v-model="input3">
  </wsh-input>
  <wsh-input
    size="mini"
    placeholder="请输入内容"
    v-model="input4">
  </wsh-input>
</div>

<script>
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: ''
    }
  }
}
</script>
```
:::

### 禁用状态

:::demo 通过 `disabled` 属性指定是否禁用 `input` 组件
``` html
<wsh-input
  placeholder="请输入内容"
  v-model="input5"
  :disabled="true">
</wsh-input>

<script>
export default {
  data () {
    return {
      input5: ''
    }
  }
}
</script>
```
:::

### 文本域
用于输入多行文本信息，通过将 `type` 属性的值指定为 `textarea`。

:::demo 文本域高度可通过 `rows` 属性控制
``` html
<wsh-input
  type="textarea"
  :rows="2"
  placeholder="请输入内容"
  v-model="textarea">
</wsh-input>

<script>
export default {
  data () {
    return {
      textarea: ''
    }
  }
}
</script>
```
:::
