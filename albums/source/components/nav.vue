<template>
	<div class="list" id="list">
		<h1 class="global-title">多功能相册</h1>
		<ul class="list-content">
			<li class="list-item" transition="staggered" v-show="show" v-for="item in layouts">
				<a 
					:class=['list-item-wraper',{'list-item-wraper-hover':item.hover}] 
					@mouseover="mouseover($index)" 
					@mouseout="mouseout($index)"
				>
					<span v-if="item.nameB" class="list-item-name" transition="fade">{{item.desc}}</span>
					<span v-if="item.nameB" class="list-item-name" transition="fade">{{item.name}}</span>
				</a>
				
			</li>
		</ul>
	</div>
</template>

<script>
	//布局信息类
	class Info {
		constructor(name,desc){
			this.name = name;
			this.desc = desc;
			this.hover = false;
			this.nameB = true;
		}
	}
	let puzzle = new Info('Puzzle','拼图布局'),
		waterfall = new Info('Waterfall','瀑布布局'),
		barrel = new Info('Barrel','木桶布局');

	export default {
		data(){
			return {
				layouts: [puzzle,waterfall,barrel],
				name: true,
				desc: false,
			}
		},
		methods: {
			mouseover: function(index){
				this.layouts[index].hover = true;
				this.layouts[index].nameB = false;
			},
			mouseout: function(index){
				this.layouts[index].hover = false;
				this.layouts[index].nameB = true;
			}
		},
		props: ['show'],

	}
</script>