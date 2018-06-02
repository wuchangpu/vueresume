<template>
	<div id="skills">
		<div class="container">
			<div class="header visible-lg-block">
				<h2 class="title" ref="title" @mouseover="titleMouseover" @mouseout='titleMouseout' v-cloak>{{title}}</h2>
				<p><span ref="upperTitle">• SKILLS •</span></p>
			</div>
			<div class="content-body row">
				<div class="frames col-sm-offset-1 col-sm-5 col-xs-12">
					<ul class="circle-in">
						<li v-for="(v,i) in skillGroupIn" :key="i">
							<span>{{v}}</span>
						</li>
					</ul>
					<ul class="circle-out">
						<li v-for="(v,i) in skillGroupOut" :key="i">
							<span>{{v}}</span>
						</li>
					</ul>
				</div>
				<div class="paragraphs col-sm-5 col-xs-12">
					<p>{{paragraphOne}}</p>
					<p>{{paragraphTwo}}</p>
					<p>{{paragraphThree}}</p>
					<p>{{paragraphFour}}</p>
				</div>
			</div>
		</div>
		<div class="arrow">
			<img src="../../static/image/arrow.svg" alt="arrow">
		</div>
	</div>
</template>

<script>
	export default{
		name: 'skills',
		data(){
			return{
				myData: {},
				title: '',
				skillGroupIn: [],
				skillGroupOut: [],
				paragraphOne: '',
				paragraphTwo: '',
				paragraphThree: '',
				paragraphFour: ''
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
		methods:{
			//设置数据
			setData(){
				let lang = this.$root.$data.language;
				if(lang === 'english'){
					this.myData = this.$myData.english.pageThree;
				}else{
					this.myData = this.$myData.chinese.pageThree;
				}
				this.title = this.myData.title;
				this.skillGroupIn = this.myData.skillGroupIn;
				this.skillGroupOut = this.myData.skillGroupOut;
				this.paragraphOne = this.myData.paragraphOne;
				this.paragraphTwo = this.myData.paragraphTwo;
				this.paragraphThree = this.myData.paragraphThree;
				this.paragraphFour = this.myData.paragraphFour;
			},
			titleMouseover(){
				this.$common.addClass(this.$refs.title, 'title2');
				this.$common.addClass(this.$refs.upperTitle, 'upper-title');
			},
			titleMouseout(){
				this.$common.removeClass(this.$refs.upperTitle, 'upper-title');
				this.$common.removeClass(this.$refs.title, 'title2');
			}
		}
	}

</script>

<style lang="scss" scoped>
	[v-cloak]{
		display: none;
	}
	#skills{
		background: linear-gradient(to right, #525F89, #4D5E8F);
		color: #fff;
		width:100%;
		height:100vh;
		padding-top: 50px; 
		display: flex;
		align-items: center;
		text-align: center;
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
		.content-body{
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			.frames{
				position: relative;
				display: flex;
				justify-content: center;
				@mixin frames_ul{
					border: 5px dashed rgba(170,188,203, 0.5);
					border-radius: 50%;
				}
				li{
					position: absolute;
					border-radius: 50%;
					color: #fff;
					cursor: pointer;
					transition: all 0.5s;
					span{
						font-size: 12px;
					}
				}
				li:hover{
					transform: scale(1.2);
				}
				// 圆的直径为1, 内圆3个项目的坐标分别为: (left, top)
				//  上(0.5, 0), 右下(0.933, 0.75), 左下(0.067, 0.75)
				// 外圆6个项目, 除上面3个外, 另3个坐标为: 
				// 右上(0.933, 0.25), 下(0.5, 1), 左上(0.067, 0.25)
				.circle-in{
					@include frames_ul;
					width: 160px;
					height: 160px;
					position: absolute;
					z-index: 1;
					top: 50%;
					left: 50%;
					margin-left: -80px;
					margin-top: -80px;
					li{
						width: 44px;
						height: 44px;
						margin-left: -22px;
						margin-top: -22px;
						span{
							line-height: 44px;
						}
						@keyframes innerX{
							from {
								left: 0;
							}
							to   {
								left: 100%;
							}
						}
						@keyframes innerY{
							from {
								top: 100%;
							}
							to   {
								top: 0;
							}
						}
						&:nth-child(1){
							// 定位用
							// left: 50%;
							// top: 0;
							// 实现圆周运动, X走一半了再走Y, 运动曲线必须是:开始和结束慢,中间快
							animation: innerX 6s ease-in-out -3s infinite alternate,innerY 6s ease-in-out 0s infinite alternate;
							background-color: rgba(212,92,70,0.7);
						}
						&:nth-child(2){
							// left: 93.3%;
							// top: 75%;
							animation: innerX 6s ease-in-out -7s infinite alternate,innerY 6s ease-in-out -4s infinite alternate;
							background-color: rgba(255,152,0,0.7);
						}
						&:nth-child(3){
							// left: 6.7%;
							// top: 75%;
							animation: innerX 6s ease-in-out -11s infinite alternate,innerY 6s ease-in-out -8s infinite alternate;
							background-color: rgba(25,161,95,0.7);
						}
					}
				}
				.circle-out{
					@include frames_ul;
					width: 270px;
					height: 270px;
					position: relative;
					li{
						width: 52px;
						height: 52px;
						margin-left: -26px;
						margin-top: -26px;
						span{
							line-height: 52px;
						}
						@keyframes outerX{
							from {
								left: 0;
							}
							to   {
								left: 100%;
							}
						}
						@keyframes outerY{
							from {
								top: 0;
							}
							to   {
								top: 100%;
							}
						}
						&:nth-child(1){
							// left: 50%;
							// top: 0;
							animation: outerX 6s ease-in-out -3s infinite alternate,outerY 6s ease-in-out 0s infinite alternate;
							background-color: rgba(103, 196, 70, 0.8);
						}
						&:nth-child(2){
							// left: 93.3%;
							// top: 25%;
							animation: outerX 6s ease-in-out -5s infinite alternate,outerY 6s ease-in-out -2s infinite alternate;
							background-color: rgba(33,147,157,0.8);
						}
						&:nth-child(3){
							// left: 93.3%;
							// top: 75%;
							animation: outerX 6s ease-in-out -7s infinite alternate,outerY 6s ease-in-out -4s infinite alternate;
							background-color: rgba(147,59,180,0.8);
						}
						&:nth-child(4){
							// left: 50%;
							// top: 100%;
							animation: outerX 6s ease-in-out -9s infinite alternate,outerY 6s ease-in-out -6s infinite alternate;
							background-color: rgba(204,102,153,0.8);
						}
						&:nth-child(5){
							// left: 6.7%;
							// top: 75%;
							animation: outerX 6s ease-in-out -11s infinite alternate,outerY 6s ease-in-out -8s infinite alternate;
							background-color: rgba(229,90,106,0.8);
						}
						&:nth-child(6){
							// left: 6.7%;
							// top: 25%;
							animation: outerX 6s ease-in-out -13s infinite alternate,outerY 6s ease-in-out -10s infinite alternate;
							background-color: rgba(201,157,108,0.8);
						}
					}
				}
			}
			.paragraphs{
				margin: .8rem 0;
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