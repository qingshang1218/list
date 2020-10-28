<template>
	<view class="container">
		<view class="yundong" v-for="(item,index) in 3" :key="index" @click="xunlian">
			<view class="blur" >
			<image 
			src="http://lc-6aL2UmwL.cn-n1.lcfile.com/3538470843647bd10e2b.jpg"
			mode="" 
			class="img1">
			</image>
			</view>
			<image src="http://lc-6aL2UmwL.cn-n1.lcfile.com/3538470843647bd10e2b.jpg" mode="" class="img"></image>
			<view class="but">
				<text>超级跑酷</text>
				<image src="../../static/iconImprovement.png" mode="" class="img3" @click="gime"></image>
			</view>
		</view>
		<view class="buttn" @click="user">
			已提升90%体能
		</view>
		<view class="con">
			<image src="../../static/TabDiscover.png" class="img4"></image>
			<image src="../../static/TabMe.png" mode="" class="img4" @click="user"></image>
		</view>  
		<!-- <button type="default" class="but">固定按钮</button> -->
	</view>
</template>

<script>
	var AndroidBridge = require('../../common/plugin.js');
	var testModule = uni.requireNativePlugin("ElitetycModulePlugin")
	var _self
	export default {
		data() {
			return {
			title: 'Hello',
			res:"计算的值是:???"
			}
		},
		onLoad() {
		    _self = this
		},
		methods: {
			user() {
				uni.redirectTo({
					url:'user'
				})
			},
			gime() {
				var MainActivity = plus.android.importClass("com.unity.mynativeapp.MainActivity")
				var mainActivity = new MainActivity();  
				// addCount.add 即为上面的原生方法拉
				this.w4 = mainActivity.btnLoadUnity; 
				// var AddCount = plus.android.importClass("com.unity.mynativeapp.AddCount")
				// var addCount = new AddCount();  
				// // addCount.add 即为上面的原生方法拉
				// this.w4 = addCount.add(1,2); 
			}
			
		}
	}
</script>

<style>
	.container {
		padding-bottom: 450upx;
		padding-top: 150upx;
		background-color: #F1F1F1;
	}
	.yundong {
		width: 80%;
		height: 600upx;
		border: 1upx solid #333333;
		display: flex;
		border-radius: 20%;
		margin-left: 10%;
		margin-top: 60upx;
		display: flex;
		flex-direction: column-reverse;
	}
	
	.yundong:first-child {
		margin-top: 0upx;
	}
	
	.yundong:last-child {
		margin-bottom: 300upx;
	}
	
  .blur{  
	 width: 100%;
	 height: 200upx;
	 border-bottom-left-radius: 120upx;
	 border-bottom-right-radius: 120upx;
		filter:blur(300px);
		-webkit-filter:blur(300px);
		-moz-filter:blur(300px);
		-ms-filter:blur(300px);
		-o-filter:blur(300px);
/* 		   background:transparent;
		
		        color:#fff;
		
		       background-color:rgba(255,255,255,0.8); */
			   filter:blur(5px);
		position: absolute;
	}  
	.img {
		height: 100%;
		width: 100%;
		border-radius: 20%;
	}
	.img1 {
		width: 600upx;
		height: 200upx;
		border-bottom-left-radius: 120upx;
		border-bottom-right-radius: 120upx;
	}
	
	.but {
		width: 80%;
		height: 200upx;
		/* border: 1upx solid #333333; */
		position: absolute;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 20upx;
	}
	
	text {
		font-size: 50upx;
	}
	.img3 {
		width: 150upx;
		height: 150upx;
		margin-right: 60upx;
	}
	/* .but {
		position: absolute;
		left: 100upx;
		top: 200upx;
		background-attachment: fixed; 
	} */
	
	.buttn {
		width: 70%;
		height: 210upx;
		margin-left: 13%;
		background-color: #fff;
		font-size: 50upx;
		display: flex;
		justify-content: center;
		align-items: center;
		/* border: 1upx solid #007AFF; */
		border-bottom-left-radius: 120upx;
		border-bottom-right-radius: 120upx;
		border-top-left-radius: 120upx;
		border-top-right-radius: 120upx;
		margin-bottom: 140upx;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3 );
		
		background-color: white;
		position: fixed;  
		bottom: 0;  
		left: 0;  
		right: 0;  
		display: flex;  
		align-items: center;  
		padding: 10px 10px;  
		padding-bottom: constant(safe-area-inset-bottom );  
		padding-bottom: calc(env(safe-area-inset-bottom) + 10px);  
		border-top: #f6f6f6 solid 1px; 
		
	}
	
	.con {  
	  background-color: white;  
	  position: fixed;  
	  bottom: 0;  
	  left: 0;  
	  right: 0;  
	  display: flex;  
	  justify-content: space-around;
	  /* padding: 10px 10px; */ 
	  padding-top: 30upx;
	  /* padding-bottom: constant(safe-area-inset-bottom);  
	  padding-bottom: calc(env(safe-area-inset-bottom) + 20px);  
	  border-top: #f6f6f6 solid 1px; */
	  height: 80upx;
	} 
	
	.img4 {
		width: 50upx;
		height: 50upx;
	}
</style>
