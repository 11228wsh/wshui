<script>
  export default {
    data () {
      return {
        value: true,
        value1: true,
        value2: true,
        value3: true,
        value4: false
      }
    },
    methods: {
    }
  }
</script>
<style>
  .wsh-switch{margin-bottom: 20px;}
</style>
## Switch 开关
表示两种相互对立的状态间的切换，多用于触发「开/关」。

### 基础用法

:::demo 绑定`v-model`到一个`Boolean`类型的变量。可以使用`active-color`属性与`inactive-color`属性来设置开关的背景色。
``` html

<wsh-switch
  v-model="value"
  active-color="#13ce66"
  inactive-color="#ff4949">
</wsh-switch>
<script>
  export default {
    data() {
      return {
        value: true
      }
    }
  };
</script>
```
:::

### 文字描述

:::demo 使用`active-text`属性与`inactive-text`属性来设置开关的文字描述。
``` html

<wsh-switch
  v-model="value1"
  active-text="启动"
  inactive-text="关闭">
</wsh-switch>
<wsh-switch
  style="display: block"
  v-model="value2"
  active-color="#13ce66"
  inactive-color="#ff4949"
  active-text="启动"
  inactive-text="关闭">
</wsh-switch>
<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true
      }
    }
  };
</script>
```
:::

### 禁用状态

:::demo 设置`disabled`属性，接受一个`Boolean`，设置`true`即可禁用。
``` html

<wsh-switch
  v-model="value3"
  disabled>
</wsh-switch>
<wsh-switch
  v-model="value4"
  disabled>
</wsh-switch>
<script>
  export default {
    data() {
      return {
        value3: true,
        value4: false
      }
    }
  };
</script>
```
:::