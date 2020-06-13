import Vue from 'vue'
import motion from './motion';

// 使用转场动画
const motion_directive = Vue.directive('motion', motion);

export default { motion_directive };