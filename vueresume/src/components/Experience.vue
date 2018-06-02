<template>
	<div id="experience">
		<div class="container">
			<div class="header visible-lg-block">
				<h2 class="title" ref="title" @mouseover="titleMouseover" @mouseout='titleMouseout' v-cloak>{{title}}</h2>
				<p><span ref="upperTitle">• EXPERIENCE •</span></p>
			</div>
			<div id="myCarousel" ref="myCarousel" class="carousel slide col-md-offset-1 col-md-10">
				<ol class="carousel-indicators">
					<li :class="{ active:isActive===i }" v-for="(v,i) in 3" :key="i" data-target="#myCarousel" :data-slide-to="i"></li>
				</ol>
				<div class="carousel-inner">
					<div class="item active">
						<h2 v-cloak>{{item[0].title}}</h2>
						<p v-cloak>{{item[0].time}}</p>
						<ul>
							<li v-cloak v-for="(v,i) in item[0].describe">{{v}}</li>
						</ul>
					</div>
					<div class="item">
						<h2 v-cloak>{{item[1].title}}</h2>
						<p v-cloak>{{item[1].time}}</p>
						<ul>
							<li v-cloak v-for="(v,i) in item[1].describe">{{v}}</li>
						</ul>
					</div>
					<div class="item">
						<h2 v-cloak>{{item[2].title}}</h2>
						<p v-cloak>{{item[2].time}}</p>
						<ul v-cloak>
							<li v-cloak v-for="(v,i) in item[2].describe">{{v}}</li>
						</ul>
					</div>
				</div>
				<a href="#myCarousel" data-slide="prev" class="carousel-control left" @mouseover="rotateLeft" @mouseout="rotateReset">
					<span class="glyphicon glyphicon-chevron-left"></span>
				</a>
				<a href="#myCarousel" data-slide="next" class="carousel-control right" @mouseover="rotateRight" @mouseout="rotateReset">
					<span class="glyphicon glyphicon-chevron-right"></span>
				</a>
			</div>
		</div>
		<div class="arrow">
			<img src="../../static/image/arrow.svg" alt="arrow">
		</div>
	</div>
</template>

<script>
	export default{
		name: 'experience',
		data(){
			return{
				myData: {},
				title: '',
				isActive: 0,
				item: []
			}
		},
		watch: {
			'$root.$data.language'(){
				this.setData();
			}
		},
		created(){
			this.setData();
			// console.log(this.item);
		},
		computed: {
		},
		methods: {
			//设置数据
			setData(){
				let lang = this.$root.$data.language;
				if(lang === 'english'){
					this.myData = this.$myData.english.pageFour;
				}else{
					this.myData = this.$myData.chinese.pageFour;
				}
				this.title = this.myData.title;
				this.item = this.myData.item;
			},
			titleMouseover(){
				this.$common.addClass(this.$refs.title, 'title2');
				this.$common.addClass(this.$refs.upperTitle, 'upper-title');
			},
			titleMouseout(){
				this.$common.removeClass(this.$refs.upperTitle, 'upper-title');
				this.$common.removeClass(this.$refs.title, 'title2');
			},
			rotateLeft(e){
				// this.$refs.myCarousel.style.transform = 'rotateX(2deg) rotateY(-6deg)';
			},
			rotateRight(){
				// this.$refs.myCarousel.style.transform = 'rotateX(2deg) rotateY(6deg)';
			},
			rotateReset(){
				// this.$refs.myCarousel.style.transform = 'rotateX(0deg) rotateY(0deg)';
			}
		}
	}

</script>

<style lang="scss" scoped>
	[v-cloak]{
		display: none;
	}
	#experience{
		background: linear-gradient(to right, #BF8374, #BC7C6F);
		width:100%;
		height:100vh;
		padding-top: 50px;
		display: flex;
		align-items: center;
		.header{
			position: fixed;
			top: 50px;
			left: 50%;
			width: 200px;
			margin-left: -100px;
			text-align: center;
			.title{
				position: relative;
				display: inline-block;
				width: 1.2rem;
				margin-top: .5rem;
				padding-bottom: .08rem;
				margin-bottom: .03rem;
				color: #fff;
			}
			.title::after{
				content: '';
				position: absolute;
				bottom: 0;
				left: 50%;
				right: 50%;
				height: 2px;
				background-color: #FC0D03;
				opacity: 0;
				transition: all 0.5s;
			}
			.title2::after{
				left: 0;
				right: 0;
				opacity: 1;
			}
			p{
				span{
					display: inline-block;
					vertical-align: text-top;
					overflow: hidden;
					height: 0;
					font-size: .12rem;
					font-weight: bold;
					color: #FC0D03;
					opacity: 0;
					transition: 0.3s linear;
				}
				.upper-title{
					opacity: 1;
					height: 15px;
				}
			}
		}
		#myCarousel{
			display: flex;
			align-items: center;
			padding: 0 0 .5rem 0;
			min-height: 320px;
			box-shadow: 0 0 8px 1px #76493C;
			border-radius: 10px;
			background-color: #F0E5D3;
			overflow: hidden;
			transition: transform 1s;
			transform-style: preserve-3d;  
			.carousel-indicators{
				bottom: 0;
				li{
					margin: 0 10px;
					background-color: #bbb;
					border: none;
				}
				.active{
					width: 10px;
					height: 10px;
					background-color: #F2BF62;
				}
			}
			.carousel-inner{
				margin: 0 auto;
				width: 70%;
				.item{
					p{
						font-size: .14rem;
					}
					ul{
						list-style-type: disc;
						margin-left: 20px;
					}
				}
			}
			a.left{
				background-image: linear-gradient(to left,rgba(211,198,173,0),rgba(209,188,152,1));
				span{
					left: 30%;
					font-size: .2rem;
					color: rgba(201,165,113,0.6);
				}
			}
			a.right{
				background-image: linear-gradient(to right,rgba(211,198,173,0),rgba(209,188,152,1));
				span{
					right: 30%;
					font-size: .2rem;
					color: #C9A571;
				}
			}
		}
		.arrow{
			position: fixed;
			z-index: 6666;
			bottom: 0;
			left: 50%;
			margin-left: -15px;
			animation: indicator 1.5s ease-in-out infinite;
			img {
				display: inline-block;
				width: 30px;
				height: 30px;
			}
		}
		@keyframes indicator {
			0%  {
				bottom: 0;
				opacity: 0;
			}
			100% {
				bottom: 10px;
				opacity: 1;
			}
		}

	}
</style>