<script>
	function clearField(){		
		let aInputs = Array.from(document.querySelector('.side-bar-content').querySelectorAll('input'));
		aInputs.forEach(function(item){
			if(item.type==='checkbox'||item.type==='radio'){
				item.parentNode.classList.remove('checked');
				item.checked = false;
			}else{
				item.value = '';
			}
		});
	}
	export default {
		data(){
			return {
				message: 'hello',
				isPuzzle: true,
				picNum: 6,
				gutter: 0,
				albumSize: {
					width: '600px',
					height: '600px',
				},
				fullScreen: false,

				Class: {
					'side-bar': true,
					'open': false,
					'close': true,

				},
				
			}
		},
		methods: {
			toggleState(){
				let oContent = document.querySelector('.side-bar');

				switch(this.Class['open']){
					case true: this.Class['open'] = false;this.Class['close'] = true;clearField();break;
					case false:this.Class['open'] = true;this.Class['close'] = false;clearField();break;
				}
			},
			applyChange(){
				let data = {picNum:this.picNum,gutter:this.gutter,albumSize:this.albumSize,fullScreen:this.fullScreen};
				switch(this.Class['open']){
					case true: this.Class['open'] = false;this.Class['close'] = true;clearField();break;
					case false:this.Class['open'] = true;this.Class['close'] = false;clearField();break;
				}
				
			}
		},
		

	}
</script>

<template>
	<div :class="Class">
		<div class="side-bar-ctro" @click="toggleState">
			<div class="side-bar-ctro-bar"></div>
		</div>
		<div class="side-bar-content">
			<div class="side-bar-content-block" v-if="isPuzzle">
				<h3>图片数量</h3>
				<label>1</label><input name="num" type="radio" v-model="picNum" value="1">
				<label>2</label><input name="num" type="radio" v-model="picNum" value="2">
				<label>3</label><input name="num" type="radio" v-model="picNum" value="3">
				<label>4</label><input name="num" type="radio" v-model="picNum" value="4">
				<label>5</label><input name="num" type="radio" v-model="picNum" value="5">
				<label>6</label><input name="num" type="radio" v-model="picNum" value="6">
				{{a}}	
			</div>
			<div class="side-bar-content-block">
				<span class="input input--isao">
					<input class="input__field input__field--isao" v-model="gutter" type="text" id="input-38" />
					<label class="input__label input__label--isao" for="input-38" data-content="图片间隙">
						<span class="input__label-content input__label-content--isao">图片间隙</span>
					</label>
				</span>
			</div>
			<div class="side-bar-content-block">
				<span class="input input--isao">
					<input class="input__field input__field--isao" v-model="albumSize.width" type="text" id="input-38" />
					<label class="input__label input__label--isao" for="input-38" data-content="相册宽度">
						<span class="input__label-content input__label-content--isao">相册宽度</span>
					</label>
				</span>
			</div>
			<div class="side-bar-content-block">
				<span class="input input--isao">
					<input class="input__field input__field--isao" v-model="albumSize.height"  type="text" id="input-38" />
					<label class="input__label input__label--isao" for="input-38" data-content="相册高度">
						<span class="input__label-content input__label-content--isao">相册高度</span>
					</label>
				</span>
			</div>
			<div class="side-bar-content-block">
				<label for="fullScreen">禁止全屏浏览</label> <input v-model="fullScreen" type="checkbox" id="fullScreen">{{b}}
			</div>
			<button @click="applyChange">应用修改</button>
		</div>
	</div>
</template>

<style>
	@import '../css/sideBar.css'; 
</style>