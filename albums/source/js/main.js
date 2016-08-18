
import '../lib/icheck/flat/red.png';
import '../lib/icheck/flat/red.css';
import '../css/animate.css';
import '../css/reset.css';
import '../css/main.css';
import '../css/VueTransition.css';
import '../images/background.jpg';
import './option.js';
import '../lib/input/css/component.css';
import '../lib/input/js/classie.js';

import Vue from 'vue';
import List from '../components/nav.vue';
import sideBar from '../components/sideBar.vue';

let sourceRoot = './source/',
	distRoot = './dist/';

//注册组件
Vue.component('list',List);
Vue.component('side-bar',sideBar);

//初始化根元素
let root = new Vue({
	el:'#vue-root',
	data:{
		listShow: false
	}
});
//开场动画
function showStart(){
	setTimeout(()=>{root.listShow = true;},1000);
}
window.addEventListener('load',showStart,false);