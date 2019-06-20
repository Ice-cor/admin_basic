<template>
  <div class="tag-nav">
    <scroll-bar ref="scrollBar">
      <router-link
        ref="tag"
        class="tag-nav-item"
        :class="isActive(item) ? 'cur' : ''"
        v-for="(item, index) in tagNavList"
        :to="item.path"
        :key="index"
      >
        {{ item.title }}
        <span
          class="el-icon-close"
          @click.prevent.stop="closeTheTag(item, index)"
        ></span>
      </router-link>
      <!-- <el-tag v-for="(item, index) in tagNavList" :key="index" closable @close="closeTheTag(item, index)">
        <router-link :to="item.path" :key="index">{{item.title}}</router-link>
      </el-tag>-->
    </scroll-bar>
  </div>
</template>

<script>
import ScrollBar from './scrollBar'

export default {
  name: 'Breadcrumb',
  data() {
    return {
      defaultPage: '/home'
    }
  },
  watch: {
    $route() {
      this.addTagNav()
      this.scrollToCurTag()
    }
  },
  computed: {
    tagNavList() {
      return this.$store.state.app.openedPageList
    }
  },
  mounted() {
    this.addTagNav()
  },
  methods: {
    addTagNav() {
      // 如果需要缓存则必须使用组件自身的name，而不是router的name
      // console.log(this.$router.getMatchedComponents(), 'ssdsdsd')

      this.$store.dispatch('addTagNav', {
        name: this.$router.getMatchedComponents()[1].name,
        path: this.$route.path,
        title: this.$route.meta.title
      })
      this.$router.push({ path: this.$route.path })
    },
    isActive(item) {
      return item.path === this.$route.path
    },
    closeTheTag(item, index) {
      // 当关闭当前页面的Tag时，则自动加载前一个Tag所属的页面
      // 如果没有前一个Tag，则加载默认页面
      this.$store.dispatch('removeTagNav', item)
      // console.log(this.$route.path, item.path)
      if (this.$route.path == item.path) {
        if (index) {
          this.$router.push(this.tagNavList[index - 1].path)
        } else {
          this.$router.push(this.defaultPage)
          if (this.$route.path == '/home') {
            this.addTagNav()
          }
        }
      }
    },
    scrollToCurTag() {
      this.$nextTick(() => {
        for (let item of this.$refs.tag) {
          if (item.to === this.$route.path) {
            this.$refs.scrollBar.scrollToCurTag(item.$el)
            break
          }
        }
      })
    }
  },
  components: {
    ScrollBar
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.tag-nav {
  flex: 1;
  // width: 100%;
  height: 100%;
  padding: 9px;
  background: #fff;
  box-sizing: border-box;
  .tag-nav-item {
    display: inline-block;
    position: relative;
    padding: 4px 10px;
    margin-right: 10px;
    border: 1px solid #447df7;
    border-radius: 4px;
    background-color: white;
    text-decoration: none;
    // height: 40px;
    // line-height: 40px;
    font-size: 14px;
    color: #606266;
    span {
      width: 16px;
      height: 16px;
      line-height: 16px;
      border-radius: 50%;
      text-align: center;
      vertical-align: middle;
      transition: all 0.3s ease;
      transform-origin: 100% 50%;
      font-size: 12px;
      color: #52bab5;
      &:before {
        display: inline-block;
      }
      &:hover {
        background-color: #3580ce;
        color: rgb(191, 203, 217);
      }
    }
    &.cur {
      background-color: #447df7;
      color: #fff;
      & span {
        color: #fff;
        &:hover {
          // background-color: lighten(#52bab5, 34%);
          color: rgb(191, 203, 217);
        }
      }
    }
  }
}
</style>
