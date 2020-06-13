<template>
  <v-app>
    <w-head style="z-index:4" @miniNavi="naviToggle" @miniSets="toggleSets" />
    <w-navi style="z-index:5" :miniNav="miniNavi" />
    <w-sets style="z-index:5" :setting="miniSets" />

    <v-content
      class="divder pb-12"
      :style="`background:url(${require('@/assets/background.png')}) fixed`"
    >
      <w-tabs style="position:sticky;top:64px;z-index:3" />
      <keep-alive>
        <router-view />
      </keep-alive>
    </v-content>

    <v-footer color="primary" class="d-md-none d-flex align-start" padless fixed>
      <v-toolbar class="v-bottom-black-bar" color="transparent" flat dark>
        <v-toolbar-items>
          <v-btn text>
            <v-icon>mdi-chevron-up</v-icon>
          </v-btn>
          <v-btn text>
            <v-icon>mdi-star</v-icon>
          </v-btn>
        </v-toolbar-items>
        <v-btn color="secondary" fab large absolute top right v-ripple="{ center: true }">
          <v-icon>mdi-reply</v-icon>
        </v-btn>
      </v-toolbar>
    </v-footer>
  </v-app>
</template>

<script>
import wHead from "./_head";
import wNavi from "./_navi";
import wTabs from "./_tabs";
import wSets from "./_sets";

export default {
  name: "Index",
  components: {
    wHead,
    wNavi,
    wTabs,
    wSets
  },
  data: () => ({
    miniNavi: true,
    miniSets: false
  }),
  methods: {
    naviToggle() {
      this.miniNavi = !this.miniNavi;
    },
    toggleSets() {
      this.miniSets = !this.miniSets;
    }
  }
};
</script>