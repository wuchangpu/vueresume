<template>
	<div id="header">
		<nav class="navbar navbar-default navbar-fixed-top">
			<!-- <button class="btn btn-primary pull-left" @click="statistics">statistics</button> -->
			<div class="container">
				<div class="navbar-header">
					<a class="navbar-brand">
						<div class="logo">
							<img src="/static/image/avatar.png" alt="avatarLogo">
						</div>
						<div class="text" @mouseover="showProfession" @mouseout="hideProfession">
							<p class="p1">{{msg1}}</p>
							<p class="p2">{{msg2}}</p>
						</div>

					</a>
					<button class="navbar-toggle" data-toggle="collapse" data-target="#nav-collapse">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
				</div>
				<div>
				<ul id="nav-collapse" class="nav navbar-nav navbar-right collapse navbar-collapse">
					<li :class="{ active:isActive===i }" v-for="(v,i) in navContent" :key="i">
						<a href="" @click.prevent="jump(i)">{{v}}</a>
					</li>
				</ul>
				</div>
			</div>
		</nav>
		<ul id="sideNavigation" class="hidden-sm hidden-xs">
			<li v-for="(v,i) in navContent" :key="i">
				<span class="side-content" v-show="current===i && hover">
					<span class="text">{{v}}</span>
					<span class="triangle"></span>
				</span>
				<em>
					<span class="circle"></span>
					<span class="icon-content">
						<span :class="['icon'+i, 'icon',{current:isActive===i}]" @mouseenter="showIcon(i)" @mouseleave="hideIcon(i)" @click="jump(i)"></span>
					</span>
				</em>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name: 'heading',
		data(){
			return {
				myData: {},
				msg1: '',
				msg2: '',
				msgOne: '',
				msgTwo: '',
				navContent: [],
				pageName: [
                    'home', 'about', 'skills', 'experience', 'contact'
                ],
                current: 0,
                hover: false
			}
		},
		computed: {
			//导航添加class显示当前页
			isActive(){
				return this.$route.params.page-1 || 0;
			}
		},
		watch: {
			'$root.$data.language'(){
				this.setData();
			}
		},
		created(){
			this.setData();
		},
		methods: {
			//设置数据
			setData(){
				let lang = this.$root.$data.language;
				if(lang === 'english'){
					this.myData = this.$myData.english.header;
				}else{
					this.myData = this.$myData.chinese.header;
				}
				this.msg1 = this.myData.msg1;
				this.msg2 = this.myData.msg2;
				this.msgOne = this.myData.msgOne;
				this.msgTwo = this.myData.msgTwo;
				this.navContent = this.myData.navContent;
			},
			showProfession(){
				this.msg1 = this.msgOne;
				this.msg2 = this.msgTwo;
			},
			hideProfession(){
				this.msg1 = 'F2E';
				this.msg2 = 'Resume';
			},
			jump(i){
				let page = this.$route.params.page || 1;
				this.$router.replace({
					name: this.pageName[i],
					params: {
						page: i+1,
						oldPage: page
					}
				});
			},
			showIcon(i){
				this.hover = true;
				this.current = i;
			},
			hideIcon(){
				this.hover = false;
			}
			// ,
			// statistics(){//友盟统计
			// 	document.write();
			// }
		}
	}
</script>

<style lang="scss" scoped>
#header{
	nav{
		background-color: rgba(211,211,211,0.6);
		border: none;
		.navbar-brand{
			float: left;
			height: 50px;
			padding: 0;
			color: #333;
			z-index: 6666;
			.logo{
				float: left;
				display: inline-block;
				margin: 0 20px;
				line-height: 50px;
				img{
					width:45px;
					height:45px;
					border-radius: 50%;
					transition: all 1s;
				}
				img:hover{
					box-shadow: 0 0 10px #765086;
				}
			}
			.text{
				float: left;
				width: 60px;
				display: inline-block;
			}
			p{
				text-align: center;
				margin-bottom: 0;
				font-size: .12rem;
			}
			.p1{
				padding-top: 5px;
				border-bottom: 1px solid #666;
			}
			.p2{
				padding-bottom: 5px;
			}
		}
		#nav-collapse li a::after{
			content: '';
			position: absolute;
			left: 50%;
			right: 50%;
			bottom: 0;
			height: 2px;
			background-color: #1283C4;
			opacity: 0;
			transition: 0.5s;
		}
		#nav-collapse li a:hover::after{
			left: 0;
			right: 0;
			opacity: 1;
		}
	}
	#sideNavigation{
		position: fixed;
		right: 30px;
		top: 50%;
		margin-top: -120px;
		z-index: 6666;
		list-style-type: none;
		li{
			margin: 5px 0;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			.side-content{
				display: flex;
				justify-content: space-between;
				transition: all 1s;
				.text{
					display: inline-block;
					padding: 5px 10px;
					background-color: #333;
					color: #fff;
					text-align: center;
					font-size: 12px;
					width: 60px;
					line-height: 12px;
					font-weight: bold;
					border-top-left-radius: 3px;
					border-bottom-left-radius: 3px;
				}
				.triangle{
					display: inline-block;
					width: 0;
					height: 0;
					border-width: 11px;
					border-style: solid;
					border-color: transparent transparent transparent #333;
				}
			}
			em{	
				position: relative;
				.circle{
					position: absolute;
					top: 10px;
					left: 10px;
					display: inline-block;
					width: 16px;
					height: 16px;
					border-radius: 50%;
					background-color: #ccc;
					z-index: -1;
					cursor: pointer;
				}
				.icon-content{
					display: inline-block;
					width:36px;
					height:36px;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				@mixin icon( $url: url(../../static/image/d_home.svg) ) {
					display: inline-block;
					background-color: rgba(50,50,50,1);
					width:12px;
					height:12px;
					background-image: $url;
					background-size: 70%;
					background-repeat: no-repeat;
					background-position: 49% 49%;
					border-radius: 50%;
					opacity: 0;
					transition: all .5s;
				}
				.icon0,.icon1,.icon2,.icon3,.icon4,.icon5{
					@include icon();
				}
				.icon1{
					background-image: url(../../static/image/d_info.svg);
				}
				.icon2{
					background-image: url(../../static/image/d_skills.svg);
				}
				.icon3{
					background-image: url(../../static/image/d_exp.svg);
				}
				.icon5{
					background-image: url(../../static/image/d_contact.svg);
				}
				@keyframes scale{
					from {
						transform: scale(0.3);
					}
					to   {
						transform: scale(1);
					}
				}
				.icon:hover {
					cursor: pointer;
					opacity: 1;
					transform: scale(3);
				}
				.current{
					opacity: 1;
					transform: scale(3);
				}
			}
		}
	}
}
</style>