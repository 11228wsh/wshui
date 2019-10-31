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
## Button 按钮
常用的操作按钮。

### 基础用法
基础的按钮用法。

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。
``` html

<div>
  <wsh-button>默认按钮</wsh-button>
  <wsh-button type="primary">主要按钮</wsh-button>
  <wsh-button type="success">success</wsh-button>
  <wsh-button type="info">info</wsh-button>
  <wsh-button type="warning">warning</wsh-button>
  <wsh-button type="danger">danger</wsh-button>
</div>
<div style="margin-top: 15px;">
  <wsh-button plain>朴素按钮</wsh-button>
  <wsh-button type="primary" plain>主要按钮</wsh-button>
  <wsh-button type="success" plain>success</wsh-button>
  <wsh-button type="info" plain>info</wsh-button>
  <wsh-button type="warning" plain>warning</wsh-button>
  <wsh-button type="danger" plain>danger</wsh-button>
</div>
<div style="margin-top: 15px;">
  <wsh-button round>圆角按钮</wsh-button>
  <wsh-button type="primary" round>主要按钮</wsh-button>
  <wsh-button type="success" round>success</wsh-button>
  <wsh-button type="info" round>info</wsh-button>
  <wsh-button type="warning" round>warning</wsh-button>
  <wsh-button type="danger" round>danger</wsh-button>
</div>
```
:::

### 禁用状态
按钮不可用状态。

:::demo 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。
``` html

<wsh-button disabled>默认按钮</wsh-button>
<wsh-button type="primary" disabled>主要按钮</wsh-button>
<wsh-button type="success" disabled>success</wsh-button>
<wsh-button type="info" disabled>info</wsh-button>
<wsh-button type="warning" disabled>warning</wsh-button>
<wsh-button type="danger" disabled>danger</wsh-button>
```
:::

### 文字按钮
没有边框和背景色的按钮。

:::demo
``` html

<wsh-button type="text">文字按钮</wsh-button>
<wsh-button type="text" disabled>文字按钮</wsh-button>
```
:::

### 不同尺寸
Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。
``` html

<wsh-button>默认按钮</wsh-button>
<wsh-button size="medium">medium</wsh-button>
<wsh-button size="small">small</wsh-button>
<wsh-button size="mini">mini</wsh-button>
```
:::