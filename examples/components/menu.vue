<template lang="html">
  <div class="menu-model">
    <el-menu
      :default-openeds="['1', '2', '3']"
      :default-active="defaultActive"
      :router="true"
    >
      <el-submenu index="1">
        <template slot="title">
          <span>开发指南</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/guide/install">安装</el-menu-item>
          <el-menu-item index="/guide/quickStart">快速上手</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <span>组件</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/button">Button 按钮</el-menu-item>
          <el-menu-item index="/input">Input 输入框</el-menu-item>
          <el-menu-item index="/layout">Layout 布局</el-menu-item>
          <el-menu-item index="/radio">Radio 单选框</el-menu-item>
          <el-menu-item index="/checkbox">Checkbox 多选框</el-menu-item>
          <el-menu-item index="/switch">Switch 开关</el-menu-item>
          <el-menu-item index="/badge">Badge 标记</el-menu-item>
          <el-menu-item index="/loading">Loading 加载</el-menu-item>
          <el-menu-item index="/message">Message 提示消息</el-menu-item>
          <el-menu-item index="/tooltip">Tooltip 文字提示</el-menu-item>
          <el-menu-item index="/backtop">Backtop 回到顶部</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      defaultActive: '/guide/install'
    }
  },
  created () {
    const path = this.$route.fullPath
    this.defaultActive = path == '/' ? '/guide/install' : path
  },
  methods: {
  }
}
</script>

<style lang="css">
</style>
