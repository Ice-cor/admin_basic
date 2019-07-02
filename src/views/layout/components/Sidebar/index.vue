<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <div class="logo">
      <span class="logoImg">
        <img src="@/assets/logo.png" alt="" />
      </span>
      <h2>xx运营系统</h2>
    </div>
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      :unique-opened="true"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#447df7"
    >
      <sidebar-item
        v-for="route in routers"
        :key="route.name"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
// import Cookies from 'js-cookie'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters(['sidebar', 'routers']),
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  height: 50px;
  font-size: 18px;
  color: #bfcbd9;
  display: flex;
  justify-content: center;
  align-items: center;
  .logoImg {
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 4px;
    > img {
      width: 100%;
    }
  }
  h2 {
    font-size: inherit;
  }
}
</style>
