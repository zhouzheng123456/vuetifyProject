<template>
  <div>
    <v-expand-transition>
      <v-tabs color="secondary" v-show="tabsView && tabList.length" show-arrows>
        <v-tab
          @contextmenu="showMenu"
          v-for="(item, i) in tabList"
          :name="i"
          :key="item.name"
          :to="item.path"
        >
          {{ item.title }}
          <v-icon
            size="20"
            v-if="item.title!='首页'"
            @click.stop.prevent="closeTab(i)"
            @contextmenu.stop.prevent
          >mdi-close</v-icon>
        </v-tab>
      </v-tabs>
    </v-expand-transition>
    <v-menu v-model="tabMenu" :position-x="x" :position-y="y" absolute offset-y min-width="110">
      <v-list dense>
        <v-list-item @click="closeTab(index)" v-ripple="{class:'secondary--text'}">
          <v-list-item-title>关闭当前</v-list-item-title>
        </v-list-item>
        <v-list-item @click="closeOther(index)" v-ripple="{class:'secondary--text'}">
          <v-list-item-title>关闭其他</v-list-item-title>
        </v-list-item>
        <v-list-item @click="closeAll" v-ripple="{class:'secondary--text'}">
          <v-list-item-title>关闭所有</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabList: [],
      tabsView: true,
      tabMenu: false,
      x: 0,
      y: 0
    };
  },
  mounted() {
    this.tabList.push({
      name: this.$route.name,
      path: this.$route.path,
      title: this.$route.meta
    });
    this.tabsView = JSON.parse(localStorage.getItem("tabsView") || true);
  },
  methods: {
    showMenu(e) {
      e.preventDefault();
      this.index = e.target.name;
      this.tabMenu = false;
      this.x = e.clientX;
      this.y = e.clientY;
      this.$nextTick(() => {
        this.tabMenu = true;
      });
    },
    closeTab(index) {
      this.tabList.splice(index, 1);
      this.$router.push(this.tabList[this.tabList.length - 1].path);
    },
    closeOther(index) {
      let list = this.tabList[index];
      this.tabList = [];
      this.tabList.push(list);
      this.$router.push(list.path);
    },
    closeAll() {
      this.tabList = [];
      this.$router.push("/home");
    }
  },
  watch: {
    $route(to) {
      // 查找tabs里面是否已经包含该路由
      let isCover = this.tabList.some(val => {
        return val.name == to.name;
      });

      !isCover &&
        this.tabList.push({
          name: to.name,
          path: to.path,
          title: to.meta
        });
    },
    tabsView(val) {
      localStorage.setItem("tabsView", val);
    }
  }
};
</script>