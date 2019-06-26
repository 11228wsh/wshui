# wshui

> 基于Vue一套UI组件

## 安装

``` bash
$ npm install wshui -S
```
## 使用

在 `main.js` 文件中引入插件并注册

``` bash
# main.js
import wshui from 'wshui'
Vue.use(wshui)
```

在项目中使用 wshui

```js
<template>
  <wsh-button size="small">默认按钮</wsh-button>
</template>
<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>
```

