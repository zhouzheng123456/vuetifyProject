<template>
  <v-dialog :value="options.isActive" persistent :width="options.width">
    <v-card :color="options.color">
      <v-card-title>{{options.title}}</v-card-title>
      <v-card-text v-if="options.text" v-html="options.text"></v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn @click="close_modal(0)" text v-if="options.type!='alert'">取消</v-btn>
        <v-btn @click="close_modal(1)" text>确定</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "v-message-modals",
  data: () => ({}),
  computed: {
    options() {
      return this.$store.state.options;
    }
  },
  methods: {
    close_modal(val) {
      this.$store.state.options.isActive = false;
      this.$store.dispatch("message_close", val);
    }
  }
};
</script>