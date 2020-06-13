import Vue from 'vue'
import MessageModals from "@/components/message/modals";
const components = [
    MessageModals,
]

components.forEach(component => {
    Vue.component(component.name, component);
});

export default {
    MessageModals
}

