<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
		uni.getStorage({
		    key: 'logntai',
			
		    success: function (res) {
		        console.log(res.data);
				if(res.data == 0 | res.data == null) {
					uni.redirectTo({
					    url: 'pages/index/logn'
					});
				}
		    },
			fail() {
				uni.redirectTo({
				    url: 'pages/index/logn'
				});
			}
		});
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};


</script>

<style>
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */

</style>
