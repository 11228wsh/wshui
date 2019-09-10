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
  <wsh-button type="success">成功按钮</wsh-button>
  <wsh-button type="info">信息按钮</wsh-button>
  <wsh-button type="warning">警告按钮</wsh-button>
  <wsh-button type="danger">危险按钮</wsh-button>
</div>
<div style="margin-top: 15px;">
  <wsh-button plain>朴素按钮</wsh-button>
  <wsh-button type="primary" plain>主要按钮</wsh-button>
  <wsh-button type="success" plain>成功按钮</wsh-button>
  <wsh-button type="info" plain>信息按钮</wsh-button>
  <wsh-button type="warning" plain>警告按钮</wsh-button>
  <wsh-button type="danger" plain>危险按钮</wsh-button>
</div>
<div style="margin-top: 15px;">
  <wsh-button round>圆角按钮</wsh-button>
  <wsh-button type="primary" round>主要按钮</wsh-button>
  <wsh-button type="success" round>成功按钮</wsh-button>
  <wsh-button type="info" round>信息按钮</wsh-button>
  <wsh-button type="warning" round>警告按钮</wsh-button>
  <wsh-button type="danger" round>危险按钮</wsh-button>
</div>
```
:::

### 禁用状态
按钮不可用状态。

:::demo 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。
``` html

<wsh-button disabled>默认按钮</wsh-button>
<wsh-button type="primary" disabled>主要按钮</wsh-button>
<wsh-button type="success" disabled>成功按钮</wsh-button>
<wsh-button type="info" disabled>信息按钮</wsh-button>
<wsh-button type="warning" disabled>警告按钮</wsh-button>
<wsh-button type="danger" disabled>危险按钮</wsh-button>
```
:::