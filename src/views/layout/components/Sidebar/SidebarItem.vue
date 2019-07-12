<template>
  <div v-if="!item.hidden && item.children" class="menu-wrapper">
    <template
      v-if="
        hasOneShowingChild(item.children, item) &&
          (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
          !item.alwaysShow
      "
    >
      <div :to="resolvePath(onlyOneChild.path)">
        <!-- 原型 app-link 有bug，暂时div代替 -->
        <el-menu-item
          :index="resolvePath(onlyOneChild.path)"
          :class="{ 'submenu-title-noDropdown': !isNest }"
        >
          <item
            v-if="onlyOneChild.meta"
            :icon="onlyOneChild.meta.icon || item.meta.icon"
            :title="onlyOneChild.meta.title"
          />
        </el-menu-item>
      </div>
    </template>
    <el-submenu :index="item.name || item.path" v-else>
      <template slot="title">
        <item
          v-if="item.meta"
          :icon="item.meta.icon"
          :title="item.meta.title"
        />
      </template>

      <template v-for="child in item.children" v-if="!child.hidden">
        <sidebar-item
          v-if="child.children && child.children.length > 0"
          :is-nest="true"
          :item="child"
          :key="child.path"
          :base-path="resolvePath(child.path)"
          class="nest-menu"
        />

        <router-link v-else :to="resolvePath(child.path)" :key="child.name">
          <el-menu-item :index="resolvePath(child.path)">
            <item
              v-if="child.meta"
              :icon="child.meta.icon"
              :title="child.meta.title"
            />
          </el-menu-item>
        </router-link>
      </template>
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
import { validateURL } from '@/utils/validate'
import Item from './Item'
import AppLink from './Link'

export default {
  name: 'SidebarItem',
  components: { Item, AppLink },
  props: {
    // route配置json
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      onlyOneChild: null
    }
  },
  computed: {
    name() {
      return this.data 
    }
  },
  methods: {
    hasOneShowingChild(children, parent) {
      // console.log(children,'children')
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // temp set(will be used if only has one showing child )
          this.onlyOneChild = item
          return true
        }
      })
      // console.log(showingChildren, '1212')

      if (showingChildren.length === 1) {
        return true
      }
      if (showingChildren.length === 0) {
        this.onlyOneChild = {
          ...parent,
          path: `/${parent.name}`,
          noShowingChildren: true
        }
        // console.log(this.onlyOneChild,'only')
        return true
      }
      return false
    },
    resolvePath(routePath) {
      // console.log(routePath,'routePath')
      return path.resolve(this.basePath, routePath)
    },
    isExternalLink(routePath) {
      return validateURL(routePath)
    }
  }
}
</script>
