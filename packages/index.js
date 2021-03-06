﻿// import button from './button.vue'
// import input from './input.vue'

// let test = {}
// test.install = function (Vue, options) {
//   Vue.prototype.$msg = 'Hello I am test.js'
//   Vue.prototype.$myMethod = function (arr) {
//     if (arr.length < 0) {
//       return false
//     } else {
//       arr = arr.join('连接你我')
//       return arr
//     }
//   }
//   Vue.component(button.name, button) // button.name 组件的name属性
//   Vue.component(input.name, input) // testPanel.name 组件的name属性
// }
// export default test

import Button from './button/index.js'
import Input from './input/index.js'
import Radio from './radio/index.js'
import Checkbox from './checkbox/index.js'
import Switch from './switch/index.js'
import Tag from './tag/index.js'
import Badge from './badge/index.js'
import Message from './message/index.js'

const components = [
  Button,
  Input,
  Radio,
  Checkbox,
  Switch,
  Tag,
  Badge,
  Message
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  Button,
  Input,
  Radio,
  Checkbox,
  Switch,
  Tag,
  Badge,
  Message
}
export default {
  install,
  Button,
  Input,
  Radio,
  Checkbox,
  Switch,
  Tag,
  Badge,
  Message
}
