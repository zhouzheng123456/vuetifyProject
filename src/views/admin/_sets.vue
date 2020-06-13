<template>
  <v-navigation-drawer
    width="300"
    :value="setting"
    overlay-opacity="0"
    floating
    temporary
    right
    app
  >
    <v-sheet class="ma-4 v-settings" color="transparent">
      <strong class="mb-3 d-inline-block">主色调(primary)</strong>
      <v-item-group v-model="primarySet">
        <v-item v-for="color in colors" :key="color" :value="color">
          <template v-slot="{ active, toggle }">
            <v-avatar
              :class="active && 'v-settings__item--active'"
              :color="color"
              class="v-settings__item"
              size="25"
              @click="toggle"
            />
          </template>
        </v-item>
      </v-item-group>

      <v-divider class="my-4 secondary" />
      <strong class="mb-3 d-inline-block">次色调(secondary)</strong>
      <v-item-group v-model="secondarySet">
        <v-item v-for="color in colors" :key="color" :value="color">
          <template v-slot="{ active, toggle }">
            <v-avatar
              :class="active && 'v-settings__item--active'"
              :color="color"
              class="v-settings__item"
              size="25"
              @click="toggle"
            />
          </template>
        </v-item>
      </v-item-group>

      <v-divider class="my-4 secondary" />
      <strong class="mb-3 d-inline-block">强色调(accent)</strong>
      <v-item-group v-model="secondarySet">
        <v-item v-for="color in colors" :key="color" :value="color">
          <template v-slot="{ active, toggle }">
            <v-avatar
              :class="active && 'v-settings__item--active'"
              :color="color"
              class="v-settings__item"
              size="25"
              @click="toggle"
            />
          </template>
        </v-item>
      </v-item-group>

      <v-divider class="my-4 secondary" />
      <strong class="mb-3 d-inline-block">顶部阴影</strong>
      <v-slider v-model="appbarShadow" color="primary" max="8" thumb-label hide-details />

      <v-divider class="my-4 secondary" />
      <v-row align="center" no-gutters>
        <v-col cols="auto">页面选项卡</v-col>
        <v-spacer />
        <v-col cols="auto">
          <v-switch v-model="tabsView" thumb-label hide-details></v-switch>
        </v-col>
      </v-row>

      <v-divider class="my-4 secondary" />
      <v-row align="center" no-gutters>
        <v-col cols="auto">菜单栏背景</v-col>
        <v-spacer />
        <v-col cols="auto">
          <v-switch v-model="backgroundNav" thumb-label hide-details></v-switch>
        </v-col>
      </v-row>

      <v-divider class="my-4 secondary" />
    </v-sheet>
  </v-navigation-drawer>
</template>

<script>
import screenfull from "screenfull";
export default {
  props: { setting: Boolean },
  data: () => ({
    color: "#E91E63",
    colors: ["#9C27b0", "#00CAE3", "#4CAF50", "#ff9800", "#E91E63", "#FF5252"],
    fav: true,
    fullscreenIcon: "mdi-fullscreen",
    miniNav: false,
    tabsView: true,
    backgroundNav: true,
    appbarShadow: 4
  }),
  computed: {
    dark() {
      return this.$vuetify.theme.dark;
    },
    lightPrimary() {
      return this.$vuetify.theme.themes.light.primary;
    },
    lightSecondary() {
      return this.$vuetify.theme.themes.light.secondary;
    },
    darkPrimary() {
      return this.$vuetify.theme.themes.dark.primary;
    },
    darkSecondary() {
      return this.$vuetify.theme.themes.dark.secondary;
    },
    primarySet: {
      get: function() {
        return this.$vuetify.theme.dark
          ? this.$vuetify.theme.themes.dark.primary
          : this.$vuetify.theme.themes.light.primary;
      },
      set: function(newValue) {
        if (this.$vuetify.theme.dark) {
          this.$vuetify.theme.themes.dark.primary = newValue;
        } else {
          this.$vuetify.theme.themes.light.primary = newValue;
        }
      }
    },
    secondarySet: {
      get: function() {
        return this.$vuetify.theme.dark
          ? this.$vuetify.theme.themes.dark.secondary
          : this.$vuetify.theme.themes.light.secondary;
      },
      set: function(newValue) {
        if (this.$vuetify.theme.dark) {
          this.$vuetify.theme.themes.dark.secondary = newValue;
        } else {
          this.$vuetify.theme.themes.light.secondary = newValue;
        }
      }
    }
  },
  methods: {
    fullscreen() {
      this.fullscreenIcon = screenfull.isFullscreen
        ? "mdi-fullscreen"
        : "mdi-fullscreen-exit";
      screenfull.toggle();
    }
  }
};
</script>
<style lang="sass">
.v-settings
  .v-item-group > .v-avatar
    cursor: pointer

    &__item
      margin: 5px
      border-width: 3px
      border-style: solid
      border-color: transparent !important

      &--active
        border-color: #00cae3 !important
</style>