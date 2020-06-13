<template>
  <v-navigation-drawer
    width="250"
    :expand-on-hover="miniNav"
    :mini-variant="miniNav"
    mini-variant-width="64"
    :src="require('@/assets/background.png')"
    :color="backgroundNav?'primary':null"
    :dark="backgroundNav"
    hide-overlay
    app
    class="navi"
  >
    <div class="navi-header">
      <img :src="require('@/assets/logo.svg')" />
    </div>

    <v-divider class="my-4"/>
    <v-list shaped>
      <template v-for="list in navList">
        <v-list-group
          class="white--text"
          v-if="list.items.length"
          :key="list.path"
          :prepend-icon="list.icon"
          :active-class="backgroundNav||$vuetify.theme.dark?'white--text':'grey--text text--darken-3'"
          :group="list.group"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="list.title"></v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="item in list.items"
            :key="item.title"
            active-class="secondary white--text"
            :to="item.path"
          >
            <v-list-item-action>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item :key="list.title" active-class="secondary white--text" :to="list.path" v-else>
          <v-list-item-action>
            <v-icon v-text="list.icon"></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="list.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "w-navi",
  props: {
    miniNav: Boolean
  },
  data() {
    return {
      backgroundNav: true,
      navList: [
        {
          title: "插件指南",
          icon: "mdi-speedometer",
          group: "/plugin",
          items: [
            {
              title: "prism 安装",
              path: "/plugin/prism",
              icon: "mdi-triangle-outline"
            },
            {
              title: "材质图标",
              path: "/plugin/icons",
              icon: "mdi-material-design"
            }
          ]
        },
        {
          title: "思维进阶",
          icon: "mdi-lightbulb-outline",
          group: "/bulb",
          items: [
            {
              title: "转场动画",
              path: "/bulb/motion",
              icon: "mdi-transition-masked"
            }
          ]
        }
      ]
    };
  }
};
</script>
<style scoped lang="scss">
.navi:before {
  opacity: 0.08;
  background-size: cover;
  background-position: center center;
  background-image: url("https://pixinvent.com/demo/convex-angular-bootstrap-admin-dashboard-template/demo-1/assets/img/sidebar-bg/04.jpg");
  width: 100%;
  height: 100%;
  content: "";
  position: absolute;
  z-index: -1; /*-1 可以当背景*/
}
.navi {
  box-sizing: border-box;
  font-family: Montserrat, "Segoe UI", Roboto, "Helvetica Neue", Arial,
    sans-serif;
  position: fixed;
  top: 0;
  width: 250px;
  transition: max-width 0.35s;
  -moz-transition: max-width 0.35s; /* Firefox 4 */
  -webkit-transition: max-width 0.35s; /* Safari 和 Chrome */
  -o-transition: max-width 0.35s; /* Opera */
  color: #fff;
  bottom: 0;
  left: 0;
  z-index: 1000;
  height: 100vh;
  box-shadow: 2px 10px 30px 0 rgba(0, 0, 0, 0.42),
    0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(45deg, #d500f9, #ffa000);
  background-repeat: repeat-x;
}
.navi-header {
  font-size: 14px;
  font-weight: 600;
  padding: 18px 15px 18px 15px;
  height: 80px;
  white-space: nowrap;
  text-transform: uppercase;
  img {
    height: 100%;
    width: 100%;
    vertical-align: bottom;
  }
  span {
    text-transform: uppercase;
    font-size: 1.3rem;
    letter-spacing: 2px;
    color: #000;
    text-align: left;
    font-weight: 400;
    width: 70%;
  }
}
</style>