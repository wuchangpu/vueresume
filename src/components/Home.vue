<template>
	<div id="home">
		<div class="home-content">
			<div class="home-header">
				<img ref="myavatar" src="/static/image/avatar.png" alt="avatar" class="img-circle">
			</div>
			<div class="home-headerinfo">
				<p ref="mymotto" class="mymotto">{{mymotto}}</p>
				<p ref="myname">{{myname}}</p>
				<p ref="myage">{{myage}}</p>
				<p ref="myprofession">{{myprofession}}</p>
				<p ref="myemail">{{myemail}}</p>
			</div>
		</div>
		<div class="arrow">
			<img src="../../static/image/arrow.svg" alt="arrow">
		</div>
	</div>
</template>

<script>

	export default{
		name: 'home',
		data(){
			return{
				myData: {},
				mymotto: '',
				myname: '',
				myage: '',
				myprofession: '',
				myemail: ''
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
		mounted(){
			this.dalayShow();
		},
		methods: {
			//设置数据
			setData(){
				let lang = this.$root.$data.language;
				if(lang === 'english'){
					this.myData = this.$myData.english.pageOne;
				}else{
					this.myData = this.$myData.chinese.pageOne;
				}
				this.mymotto = this.myData.mymotto;
				this.myname = this.myData.myname;
				this.myage = this.myData.myage;
				this.myprofession = this.myData.myprofession;
				this.myemail = this.myData.myemail;
			},
			dalayShow(){			
				let elArr = [this.$refs.mymotto,this.$refs.mymotto, this.$refs.myname, this.$refs.myage, this.$refs.myprofession, this.$refs.myemail];
				let i = 1;
				//以下为只加载动画一次
				let isOpen = sessionStorage.getItem('isOpen');
				// let isOpen = true;
				if(!isOpen){
					this.timeout = setTimeout(()=>{
						elArr[0].style.opacity = 1;
						var delay = setInterval(()=>{
							if(i===elArr.length){
								clearInterval(delay);
								return;
							}
							else if(i===1){
								this.$common.addClass(elArr[i], 'mymotto2');
							}else{
								elArr[i].style.opacity = 1;
							}
							i++;
						},500);
						this.delay = delay;
					},100);
					//设置已打开
					sessionStorage.setItem('isOpen',true);
				}else{
					elArr.forEach((item,index,arr)=>{
						if(index!==1){
							item.style.opacity = 1;
						}else{
							this.$common.addClass(item, 'mymotto2');
						}
					});
				}
				/*
				* 以下为每次切换都加载动画
				*/
				// let i = 1;
				// setTimeout(()=>{
				// 	elArr[0].style.opacity = 1;
				// 	let delay = setInterval(()=>{
				// 		if(i===elArr.length){
				// 			clearInterval(delay);
				// 			return;
				// 		}
				// 		else if(i===1){
				// 			common.addClass(elArr[i], 'mymotto2');
				// 		}else{
				// 			elArr[i].style.opacity = 1;
				// 		}
				// 		i++;

				// 	},500);
				// },1000);
				
			}
		}
	}

</script>

<style lang="scss" scoped>
	#home{
		background: linear-gradient(to right, #84ACA1, #83ABA0);
		color: #fff;
		width:100%;
		height:100vh;
		text-align: center;
		/*animation: zoom 1s;*/
		display: flex;
		justify-content: center;
		align-items: center;
		.home-content{
			letter-spacing: 1px;
			@keyframes move-up{
				from {
					padding-top: 300px;
					opacity: 0;
				}
				to   {
					padding-top: 0;
					opacity: 1;
				}
			}
			.home-header{
				img{
					width: 120px;
					margin: 0 auto;
					margin-bottom: 20px;
					padding: 2px;
					transition: all 1s;
					// animation: move-up 2s ease-in-out;
				}
				img:hover{
					box-shadow: 0 0 10px #765086;
				}
			}
			.home-headerinfo{
				p{
					opacity: 0;
					transition: all 1s;
				}
				.mymotto{
					font-weight: bold;
					padding: 10px;
					position: relative;
					margin-top: 0;
				}
				.mymotto::after{
					content: '';
					position: absolute;
					left: 50%;
					right: 50%;
					bottom: 0;
					height: 2px;
					background-color: #F08939;
					opacity: 0;
					transition: all 1s;
				}
				.mymotto2::after{
					opacity: 1;
					left: 0;
					right: 0;
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