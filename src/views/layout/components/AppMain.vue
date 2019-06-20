<template>
  <section class="app-main">
    <transition name="fade" mode="out-in">
      <!-- <router-view :key="key"></router-view> -->
      <!-- <router-view/> -->
      <keep-alive :exclude="cachedPageName">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  created() {},
  computed: {
    tagNavList() {
      return this.$store.state.app.cachedPageName
    }
  },
  data() {
    return {
      cachedPageName: ['caseInfo', 'Home']
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  /*50 = navbar  */
  padding: 12px;
  min-height: calc(100vh - 50px);
  height: calc(100vh - 65px);
  position: relative;
  background-color: lightgray;
  /* overflow: hidden; */
  /* height: calc(100vh - 50px); */
  &>div{
    height: 100%;
  }
}
</style>
