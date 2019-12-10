<template>
	<div id="contact">
		<div class="container content">
			<div class="header visible-lg-block">
				<h2 class="title" ref="title" @mouseover="titleMouseover" @mouseout='titleMouseout' v-cloak>{{title}}</h2>
				<p><span ref="upperTitle">• CONTACT ME •</span></p>
			</div>
			<div class="content-body">
				<ul class="orientation">
					<li v-for="(v,i) in orientation" :key="i">{{v}}</li>
				</ul>
				<div class="paragraphs">
					<p v-for="(v,i) in paragraphs" :key="i">{{v}}</p>
				</div>
				<!-- <ul class="interrelated">
					<li v-for="(v,i) in interrelatedSrc" :key="i" :title="imgAlt[i]" data-toggle="modal" data-target="#myModal">
						<img :src="v" :alt="imgAlt[i]">
					</li>
					<div class="modal fade" id="myModal">
						<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
									<button class="close" data-dismiss="modal">
										<span>&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<p>{{modalTip.body}}</p>
								</div>
								<div class="modal-footer">
									<button class="btn btn-primary" data-dismiss="modal">
										{{modalTip.footer}}
									</button>
								</div>
							</div>
						</div>
					</div>
				</ul> -->
			</div>
		</div>
		<footer class="footer">
			<p>{{rights}}</p>
		</footer>
	</div>
</template>

<script>
	export default {
		name: 'contact',
		data(){
			return {
				page: 6,
				myData: {},
				title: '',
				orientation: [],
				paragraphs: '',
				imgAlt: [],
				modalTip: {},
				// interrelatedSrc: [
				// 	'/static/image/s_blog.svg',
				// 	'/static/image/s_sf.svg',
				// 	'/static/image/s_github.svg',
				// 	'/static/image/s_zh.svg',
				// 	'/static/image/s_wb.svg'
				// ],
				interrelatedSrc: this.$images.contact,
				rights: ''
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
		computed: {
		},
		methods: {
			//设置数据
			setData(){
				let lang = this.$root.$data.language;
				if(lang === 'english'){
					this.myData = this.$myData.english.pageFive;
				}else{
					this.myData = this.$myData.chinese.pageFive;
				}
				this.title = this.myData.title;
				this.orientation = this.myData.orientation;
				this.paragraphs = this.myData.paragraphs;
				this.imgAlt = this.myData.imgAlt;
				this.modalTip = this.myData.modalTip;
				this.rights = this.myData.rights;
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
	#contact{
		background: linear-gradient(to right, #9F966F, #A29971);
		width:100%;
		height:100vh;
		padding-top: 50px;
		display: flex;
		align-items: center;
		text-align: center;
		padding-bottom: 100px;
		color: #fff;
		.content{
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
					background-color: #F74803;
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
						color: #F74803;
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
				padding-top: 80px;
				.orientation{
					li{
						display: inline-block;
						padding: 20px;
						font-size: .24rem;
						font-weight: bold;
						&:nth-child(1){
							color: #FF3B24;
						}
						&:nth-child(2){
							color: #F0BF27;
						}
						&:nth-child(3){
							color: #33CCFF;
						}
						&:nth-child(4){
							color: #4380A5;
						}
					}
				}
				.interrelated{
					margin-top: 80px;
					li{
						display: inline-block;
						background-color: rgba(64,64,64,0.2);
						border-radius: 50%;
						padding: 5px;
						margin: 0 5px;
						cursor: pointer;
						height: 40px;
						// width: 40px
						img{
							width: 30px;
						}
					}
					.modal{
						background-color: rgba(177,189,209,0.5);
						.modal-dialog{
							margin-top: 200px;
							.modal-content{
								border: none;
								color: #2B7FB4;
								.modal-header{
									background-color: #81B4BF;
									border-top-left-radius: 5px;
									border-top-right-radius: 5px;
									border-bottom: none;
								}
								.modal-body{
									background-color: #D6ECF0;
									height: 100px;
									display: flex;
									align-items: center;
									justify-content: center;
									p{
										margin-bottom: 0;
									}
								}
								.modal-footer{
									background-color: #D6ECF0;
									border-top: none;
									text-align: center;
									border-bottom-left-radius: 5px;
									border-bottom-right-radius: 5px;
									button{
										opacity: 0.6;
									}
								}
							}
						}
					}
				}
			}
		}
		.footer{
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 100px;
			background-color: #333;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			p{
				margin: .05rem 0;
				font-size: 80%;
				color: #ccc;
			}
		}
	}
</style>