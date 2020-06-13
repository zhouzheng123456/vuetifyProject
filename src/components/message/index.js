import Vue from 'vue';
import Loading from './loading.vue';
import Toast from './toast.vue';
import store from '@/store'

let constructor, instance;

const Message = function (component, options, callback) {
  if (Vue.prototype.$isServer) return;
  options = options || {};

  constructor = Vue.extend(component);
  instance = new constructor({
    data: options
  });
  instance.$mount();
  document.querySelectorAll(".v-application")[0].appendChild(instance.$el);

  instance.callback = (action, instance) => {
    callback(action, instance);
  };

  return instance;
};

//alert
Message.alert = (text, options) => {
  options = options || {};
  options.title = "提示";
  options.text = text;
  options.width = 400;
  options.type = "alert"
  options.isActive = true;

  Object.assign(store.state.options, options);

};

//confirm
Message.confirm = (text, options) => {
  options = options || {};
  options.title = "提示";
  options.text = text;
  options.width = 400;
  options.type = "confirm"
  options.isActive = true;

  Object.assign(store.state.options, options);
};

//loading
Message.loading = {
  show: () => {
    Message(Loading);
    instance.msg_type = "loading";
  },
  hide: () => {
    if (instance && "loading" == instance.msg_type) {
      document.querySelectorAll(".v-application")[0].removeChild(instance.$el);
      instance.$destroy();
      instance = null;
    }
  }
};

//prompt
Message.prompt = (text, options) => {
  options = options || {};
  options.text = text;
  options.width = 450;
  options.type = "prompt"
  options.isActive = true;
  store.state.isActive = options.isActive;
  store.state.modals.options = options;

};

//toast
Message.toast = function (text, options) {
  options = options || {};
  options.text = text;//设置文本
  options.isActive = true;//显示与否
  options.i = document.querySelectorAll('.v-snack').length;

  return Message(Toast, options);
};

export default Message;
//https://cloud.tencent.com/developer/article/1148424
