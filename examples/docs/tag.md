<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>
## Tag 标签
用于标记和选择。

### 基础用法

:::demo 由`type`属性来选择`tag`的类型，也可以通过`color`属性来自定义背景色。
``` html

<wsh-tag>标签一</wsh-tag>
<wsh-tag type="success">标签二</wsh-tag>
<wsh-tag type="info">标签三</wsh-tag>
<wsh-tag type="warning">标签四</wsh-tag>
<wsh-tag type="danger">标签五</wsh-tag>
```
:::

### 不同尺寸
Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。
``` html

<wsh-tag>默认标签</wsh-tag>
<wsh-tag size="medium">中等标签</wsh-tag>
<wsh-tag size="small">小型标签</wsh-tag>
<wsh-tag size="mini">超小标签</wsh-tag>
```
:::

### 不同主题
Tag 组件提供了三个不同的主题：`dark`、`light` 和 `plain`

:::demo 通过设置`effect`属性来改变主题，默认为 `light`
``` html

<div class="tag-group">
  <span class="tag-group__title">Dark</span>
  <wsh-tag
    v-for="item in items"
    :key="item.label"
    :type="item.type"
    effect="dark">
    {{ item.label }}
  </wsh-tag>
</div>
<div class="tag-group">
  <span class="tag-group__title">Plain</span>
  <wsh-tag
    v-for="item in items"
    :key="item.label"
    :type="item.type"
    effect="plain">
    {{ item.label }}
  </wsh-tag>
</div>

<script>
  export default {
    data() {
      return {
        items: [
          { type: '', label: '标签一' },
          { type: 'success', label: '标签二' },
          { type: 'info', label: '标签三' },
          { type: 'danger', label: '标签四' },
          { type: 'warning', label: '标签五' }
        ]
      }
    }
  }
</script>
```
:::