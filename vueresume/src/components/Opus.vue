<template>
	<div id="opus">
		<h1>这是第五页</h1>
		<div class="arrow">
			<img src="/static/image/arrow.svg" alt="arrow">
		</div>
	</div>
</template>

<script>
	

</script>

<style lang="scss" scoped>
	#opus{
		background: linear-gradient(to right, #84ACA1, #83ABA0);
		width:100%;
		height:100vh;
		padding-top: 50px; 
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