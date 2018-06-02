<template>
	<div id="about">
		<div class="content">
			<div class="header visible-lg-block">
				<h2 class="title" ref="title" @mouseover="titleMouseover" @mouseout='titleMouseout' v-cloak>{{title}}</h2>
				<p><span ref="upperTitle">• ABOUT ME •</span></p>
			</div>
			<div class="content-head">
				<div class="item col-sm-3 col-xs-6" v-for="(v,i) in imgSrc" :key="i">
					<div class="img">
						<img ref="img" :src="v" alt="imgAlt[i]">
						<!-- <img src="/static/image/2-education.svg" alt="imgAlt[i]"> -->
					</div>
					<p v-cloak>{{itemContent[i]}}</p>
				</div>
			</div>
			<div class="content-body">
				<span class="before visible-lg-inline-block"></span>
				<p v-for="(v,i) in bodyContent" :key="i" v-cloak>{{v}}</p>
				<span class="after visible-lg-inline-block"></span>
			</div>
		</div>
		<div class="arrow">
			<img src="../../static/image/arrow.svg" alt="arrow">
		</div>
	</div>
</template>

<script>
	export default {
		name: 'about',
		data(){
			return {
				page: 2,
				myData: {},
				title: '',
				// imgSrc: [
				// 	"/static/image/2-education.svg",
				// 	"/static/image/2-age.svg",
				// 	"/static/image/2-location.svg",
				// 	"/static/image/2-status.svg"
				// ],
				imgSrc: this.$images.about,
				imgAlt: [],
				itemContent: [],
				bodyContent: []
			}
		},
		watch: {
			'$root.$data.language'(){
				this.setData();
			}
		},
		created(){
			console.log(this.$refs.img);
			// this.$refs.img[0].src = '/static/image/loading.gif';
			this.setData();
		},
		methods: {
			//设置数据
			setData(){
				let lang = this.$root.$data.language;
				if(lang === 'english'){
					this.myData = this.$myData.english.pageTwo;
				}else{
					this.myData = this.$myData.chinese.pageTwo;
				}
				this.title = this.myData.title;
				this.imgAlt = this.myData.imgAlt;
				this.itemContent = this.myData.itemContent;
				this.bodyContent = this.myData.bodyContent;
			},
			titleMouseover(){
				this.$common.addClass(this.$refs.title, 'title2');
				this.$common.addClass(this.$refs.upperTitle, 'upper-title');
			},
			titleMouseout(){
				this.$common.removeClass(this.$refs.upperTitle, 'upper-title');
				this.$common.removeClass(this.$refs.title, 'title2');
			},
	        //提前加载图片
	        preLoadPic(){
	            let img = new Image();
	            img.src = '/static/image/2-education.svg';
	            img.src = '/static/image/2-age.svg';
	            img.src = '/static/image/2-location.svg';
	            img.src = '/static/image/2-status.svg';
	        },
		}
	}

</script>

<style lang="scss" scoped>
	[v-cloak]{
		display: none;
	}
	#about{
		background: linear-gradient(to right, #0F8A7F, #0F8B80);
		color: #fff;
		width: 100%;
		height: 100vh;
		padding-top: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		.content{
			display: flex;
			flex-direction: column;
			margin-bottom: .2rem;
			width: 100%;
			max-width: 680px;
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
				}
				.title::after{
					content: '';
					position: absolute;
					bottom: 0;
					left: 50%;
					right: 50%;
					height: 2px;
					background-color: #FE7F17;
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
						color: #FE7F17;
						opacity: 0;
						transition: 0.3s linear;
					}
					.upper-title{
						opacity: 1;
						height: 15px;
					}
				}

			}
			.content-head{
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				// background-color: #79C1AF;
				border-radius: .2rem;
				width: 80%;
				margin: 0 10%;
				.item{
					padding: .1rem;
					flex: 0 1 auto;
					text-align: center;
					.img{
						position: relative;
						width: 80px;
						height: 80px;
						margin: .1rem auto;
						border-radius: 50%;
						transition: all 0.5s;
					}
					img{
						position: relative;
						z-index: 1;
						width: 80px;
						height: 80px;
						border-radius: 50%;
						padding: 10px;
						transition: all 1s;
						background-color: #1B9489;
					}
					@media screen and (max-width: 480px) {
						.img{
							width: 60px;
							height: 60px;
						}
						img{
							width: 60px;
							height: 60px;
						}
					}
					.img:hover{
						background-color: #1B9489;
						transform: scale(0.9);
					}
					.img::after{
						content: '';
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						border-radius: 50%;
						background-color: #1B9489;
						cursor: pointer;
						transition: all 1s;
					}
					.img:hover::after{
						animation: ripple 1s ease-out;
					}
					@keyframes ripple {
						0%   {
							opacity: 0.5;
						}
						50%  {
							box-shadow: 0 0 10px 10px #A0A0B4,0 0 0 10px rgba(255,255,255,1);
						}
						100% {
							box-shadow: 0 0 10px 10px #A0A0B4,0 0 0 10px rgba(255,255,255,1);
							transform: scale(1.5);
							opacity: 0;
						}
					}
					p{
						margin-top: .15rem;
						margin-bottom: 0;
						color: #fff;
					}
				}
			}
			@media screen and ( max-width: 767px){
				content-head{
					width: 600px;
				}
			}
			.content-body{
				margin: .1rem 0;
				padding: .2rem;
				text-align: center;
				position: relative;
				p{
					margin: .1rem 0;
				}
			}
			@mixin box{
				position: absolute;
				width: .5rem;
				height: .5rem;
			}
			.content-body .before{
				@include box;
				top: 0;
				left: -0.5rem;
				border-top: 2px solid #59BA22;
				border-left: 2px solid #59BA22;
			}
			.content-body .after{
				@include box;
				bottom: 0;
				right: -0.5rem;
				border-right: 2px solid #59BA22;
				border-bottom: 2px solid #59BA22;
			}
		}
		.arrow{
			position: fixed;
			z-index: 6666;
			bottom: 0;
			left: 50%;
			margin-left: -0.15rem;
			animation: indicator 1.5s ease-in-out infinite;
			img {
				display: inline-block;
				width: .3rem;
				height: .3rem;
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