<script>
  export default {
    data () {
      return {
        checked: true,
        checked1: false,
        checked2: true
      }
    },
    methods: {
    }
  }
</script>
## Checkbox 多选框
一组备选项中进行多选

### 基础用法
单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

:::demo 在`wsh-checkbox`元素中定义`v-model`绑定变量，单一的`checkbox`中，默认绑定变量的值会是`Boolean`，选中为`true`。
``` html

<wsh-checkbox v-model="checked">7天自动登录</wsh-checkbox>

<script>
  export default {
    data() {
      return {
        checked: true
      };
    }
  };
</script>
```
:::

### 禁用状态
多选框不可用状态。

:::demo 设置`disabled`属性即可。
``` html

<wsh-checkbox v-model="checked1" disabled>篮球</wsh-checkbox>
<wsh-checkbox v-model="checked2" disabled>足球</wsh-checkbox>

<script>
  export default {
    data() {
      return {
        checked1: false,
        checked2: true
      };
    }
  };
</script>
```
:::