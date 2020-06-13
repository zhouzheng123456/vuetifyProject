<template>
  <v-app-bar height="64" color="primary" :elevation="'6'" app dark>
    <v-app-bar-nav-icon @click.stop="toggle()"></v-app-bar-nav-icon>
    
    <img :src="require('@/assets/vuetify.png')" alt="Vuetify.js" height="50" />
    <v-toolbar-title>SPECTER-CORE-VUE</v-toolbar-title>
    <v-spacer />

    <v-btn icon @click.stop="fullscreen">
      <v-icon>{{fullscreenIcon}}</v-icon>
    </v-btn>
    <v-btn icon @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark">
      <v-icon>mdi-theme-light-dark</v-icon>
    </v-btn>
    <v-btn icon @click.stop="sets">
      <v-icon>mdi-palette</v-icon>
    </v-btn>

    <v-menu
      :close-on-content-click="false"
      offset-y
      nudge-width="200"
      nudge-left="200"
      nudge-bottom="10"
    >
      <template v-slot:activator="{on}">
        <v-btn icon v-on="on" class="mr-2">
          <v-badge>
            <template v-slot:badge>6</template>
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
      </template>

      <v-card tile>
        <v-list shaped>
          <v-subheader>REPORTS</v-subheader>
          <v-list-item-group color="primary">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-clock</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Real-Time</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Audience</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-flag</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Conversions</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-menu>

    <v-toolbar-items>
      <v-menu
        :close-on-content-click="false"
        offset-y
        nudge-width="200"
        nudge-left="245"
        nudge-bottom="1"
      >
        <template v-slot:activator="{on}">
          <v-btn text large v-on="on">
            <v-avatar size="32px" item>
              <v-img :src="require('@/assets/vuetify.png')" alt="Vuetify"></v-img>
            </v-avatar>管理员
          </v-btn>
        </template>

        <v-card tile>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Admin</v-list-item-title>
                <v-list-item-subtitle>登录时间：{{new Date().toDateString()}}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn :class="fav ? 'red--text' : ''" icon @click="fav = !fav">
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list shaped>
            <v-subheader>REPORTS</v-subheader>
            <v-list-item-group color="primary">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-clock</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>修改密码</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>个人信息</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item href="#/login">
                <v-list-item-icon>
                  <v-icon>mdi-flag</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>注销退出</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-menu>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import screenfull from "screenfull";
export default {
  data() {
    return {
      color: "#E91E63",
      fav: true,
      fullscreenIcon: "mdi-fullscreen",
      miniNav: false,
      tabsView: true,
      backgroundNav: true,
      appbarShadow: 4
    };
  },
  methods: {
    fullscreen() {
      this.fullscreenIcon = screenfull.isFullscreen
        ? "mdi-fullscreen"
        : "mdi-fullscreen-exit";
      screenfull.toggle();
    },
    toggle() {
      this.$emit("miniNavi");
    },
    sets() {
      this.$emit("miniSets");
    }
  }
};
</script>