<template>
  <v-snackbar
    v-model="isActive"
    :absolute="absolute"
    :color="color"
    :top="top"
    :left="left"
    :right="right"
    :bottom="bottom"
    :timeout="timeout"
    :vertical="vertical"
    :multi-line="multiLine"
    :style="'top:'+ (8+i*64) +'px;'"
  >
    {{text}}
    <v-btn color="indigo" text @click="isActive=false">
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      i: 0,
      isActive: false,
      text: null,
      absolute: false,
      color: null,
      top: true,
      left: false,
      right: true,
      bottom: false,
      vertical: false,
      multiLine: false,
      timeout: 2000
    };
  }
};
</script>
