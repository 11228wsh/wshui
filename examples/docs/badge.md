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
## Badge 标记
出现在按钮、图标旁的数字或状态标记。

### 基础用法
展示新消息数量。

:::demo 定义`value`属性，它接受`Number`或者`String`。
``` html

<wsh-badge :value="12" class="item">
  <wsh-button size="small">消息</wsh-button>
</wsh-badge>
<wsh-badge :value="3" class="item">
  <wsh-button size="small">评论</wsh-button>
</wsh-badge>
<wsh-badge :value="1" class="item" type="primary">
  <wsh-button size="small">好友</wsh-button>
</wsh-badge>
<wsh-badge :value="2" class="item" type="warning">
  <wsh-button size="small">回复</wsh-button>
</wsh-badge>
<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### 最大值
可自定义最大值。

:::demo 由`max`属性定义，它接受一个`Number`，需要注意的是，只有当`value`为`Number`时，它才会生效。
``` html

<wsh-badge :value="200" :max="99" class="item">
  <wsh-button size="small">消息</wsh-button>
</wsh-badge>
<wsh-badge :value="100" :max="10" class="item">
  <wsh-button size="small">评论</wsh-button>
</wsh-badge>
<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### 自定义内容
可以显示数字以外的文本内容。

:::demo 定义`value`为`String`类型是时可以用于显示自定义文本。
``` html

<wsh-badge value="new" class="item">
  <wsh-button size="small">评论</wsh-button>
</wsh-badge>
<wsh-badge value="hot" class="item">
  <wsh-button size="small">回复</wsh-button>
</wsh-badge>
<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### 小红点
以红点的形式标注需要关注的内容。

:::demo 除了数字外，设置`is-dot`属性，它接受一个`Boolean`。
``` html

<wsh-badge is-dot class="item">数据查询</wsh-badge>
<wsh-badge is-dot class="item">
  <wsh-button class="share-button" size="small" type="primary">消息</wsh-button>
</wsh-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::