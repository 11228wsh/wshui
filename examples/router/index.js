import Vue from 'vue'
import Router from 'vue-router'

import Install from '../docs/install.md'
import QuikeStart from '../docs/quickStart.md'

import Button from '../docs/button.md'
import Input from '../docs/input.md'
import Radio from '../docs/radio.md'
import Checkbox from '../docs/checkbox.md'
import Switch from '../docs/switch.md'
import Tag from '../docs/tag.md'
import Badge from '../docs/badge.md'
import Message from '../docs/message.md'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'default', component: Install },
    { path: '/guide/install', name: 'install', component: Install },
    { path: '/guide/quickStart', name: 'quikeStart', component: QuikeStart },
    { path: '/button', name: 'button', component: Button },
    { path: '/input', name: 'input', component: Input },
    { path: '/radio', name: 'radio', component: Radio },
    { path: '/checkbox', name: 'checkbox', component: Checkbox },
    { path: '/switch', name: 'switch', component: Switch },
    { path: '/tag', name: 'tag', component: Tag },
    { path: '/badge', name: 'badge', component: Badge },
    { path: '/message', name: 'message', component: Message }
  ]
})