<script>
  export default {
    methods: {
      open() {
        this.$message('消息提示');
      },

      openVn() {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, '内容可以自定义 '),
            h('i', { style: 'color: teal' }, 'helloWorld')
          ])
        });
      },

      open1() {
        this.$message('消息提示');
      },
      open2() {
        this.$message({
          message: '登录成功',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: '输入有误',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('出错了');
      }
    }
  }
</script>
## Message 消息提示
常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。

### 基础用法
从顶部出现，3 秒后自动消失。

:::demo Message 在配置上与 Notification 非常类似，所以部分 options 在此不做详尽解释，文末有 options 列表，可以结合 Notification 的文档理解它们。wshui 注册了一个`$message`方法用于调用，Message 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。
``` html

<template>
  <div>
    <wsh-button :plain="true" @click="open">打开消息提示</wsh-button>
    <wsh-button :plain="true" @click="openVn">VNode</wsh-button>
  </div>
</template>
<script>
  export default {
    methods: {
      open() {
        this.$message('消息提示');
      },

      openVn() {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, '内容可以自定义 '),
            h('i', { style: 'color: teal' }, 'helloWorld')
          ])
        });
      }
    }
  }
</script>
```
:::

### 不同状态
用来显示「成功、警告、消息、错误」类的操作反馈。

:::demo 当需要自定义更多属性时，Message 也可以接收一个对象为参数。比如，设置`type`字段可以定义不同的状态，默认为`info`。此时正文内容以`message`的值传入。同时，我们也为 Message 的各种 `type` 注册了方法，可以在不传入type字段的情况下像`open4`那样直接调用。
``` html

<template>
  <div>
    <wsh-button :plain="true" @click="open2">成功</wsh-button>
    <wsh-button :plain="true" @click="open3">警告</wsh-button>
    <wsh-button :plain="true" @click="open1">消息</wsh-button>
    <wsh-button :plain="true" @click="open4">错误</wsh-button>
  </div>
</template>
<script>
  export default {
    methods: {
      open1() {
        this.$message('消息提示');
      },
      open2() {
        this.$message({
          message: '登录成功',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: '输入有误',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('出错了');
      }
    }
  }
</script>
```
:::