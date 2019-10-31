<script>
  export default {
    data () {
      return {
        radio: '1',
        radio1: '选中且禁用'
      }
    },
    methods: {
    }
  }
</script>

## Radio 单选框
在一组备选项中进行单选

### 基础用法
由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

:::demo 要使用 Radio 组件，只需要设置`v-model`绑定变量，选中意味着变量的值为相应 Radio `label`属性的值，`label`可以是`String`、`Number`或`Boolean`。
``` html

<wsh-radio v-model="radio" label="1">男</wsh-radio>
<wsh-radio v-model="radio" label="2">女</wsh-radio>

<script>
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>
```
:::

### 禁用状态
单选框不可用的状态。

:::demo 只要在`el-radio`元素中设置`disabled`属性即可，它接受一个`Boolean`，`true`为禁用。
``` html

<el-radio disabled v-model="radio1" label="禁用">男</el-radio>
<el-radio disabled v-model="radio1" label="选中且禁用">女</el-radio>

<script>
  export default {
    data () {
      return {
        radio1: '选中且禁用'
      };
    }
  }
</script>
```
:::