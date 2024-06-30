<template>
	<view class="userLayout pageBg">
		<view class="userInfo ">
			<view class="avatar">
				<image src="../../static/images/xxmLogo.png" mode="aspectFill"></image>
			</view>
			<view class="nickname">100.100.100.100</view>
			<view class="address">来自于：未来</view>
		</view>
		<view class="section">
			<view class="list">
				<view class="row" @click="clickGoClasslist">
					<view class="left">
						<uni-icons type="download-filled" size="20" ></uni-icons>
						<view class="text">
							我的下载
						</view>
					</view>
					<view class="right">
						<view class="text">23</view>
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					</view>

				</view>
				<view class="row"  @click="clickGoClasslist">
					<view class="left">
						<uni-icons type="star-filled" size="20"></uni-icons>
						<view class="text">
							我的评分
						</view>
					</view>
					<view class="right">
						<view class="text">23</view>
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					</view>

				</view>
				<view class="row">
					<view class="left">
						<uni-icons type="chatboxes-filled" size="20" ></uni-icons>
						<view class="text">
							联系客服
						</view>
					</view>
					<view class="right">
						<view class="text">23</view>
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					</view>
					<!-- #ifdef MP -->
					<button open-type="contact">联系客服</button>
					<!-- #endif -->
					<!-- #ifndef MP -->
					<button @click="clickConcact">拨打电话</button>
					<!-- #endif -->

				</view>
			</view>
		</view>
		<view class="section">
			<view class="list">
				<view class="row" >
					<view class="left">
						<uni-icons type="notification-filled" size="20" ></uni-icons>
						<view class="text">
							订阅更新
						</view>
					</view>
					<view class="right">
						<view class="text">23</view>
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					</view>
				</view>
				<view class="row" >
					<view class="left">
						<uni-icons type="flag-filled" size="20" ></uni-icons>
						<view class="text">
							常见问题
						</view>
					</view>
					<view class="right">
						<view class="text">23</view>
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script setup>

 const clickConcact = ()=>{
	 uni.makePhoneCall({
	 	phoneNumber:"114"
	 })
 }
 
 const clickGoClasslist = ()=>{
	 uni.navigateTo({
	 	url:"/pages/classlist/classlist"
	 })
 }
</script>

<style lang="scss" scoped>
	.userLayout {
		.userInfo {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			padding: 50rpx 0;

			.avatar {
				width: 160rpx;
				height: 160rpx;
				border-radius: 50%;
				overflow: hidden;

				image {
					width: 100%;
					height: 100%;
				}

			}

			.nickname {
				font-size: 44rpx;
				color: #333;
				padding: 20rpx 0 5rpx;

			}

			.address {
				font-size: 28rpx;
				color: #ababab;
			}
		}

		.section {
			width: 690rpx;
			margin: 50rpx auto;
			border: 1rpx solid #eee;
			border-radius: 10rpx;
			box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.05);

			.list {
				.row {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 0 30rpx;
					height: 100rpx;
					border-bottom: 1rpx solid #eee;
					position: relative;
					background: #fff;

					&:last-child {
						border-bottom: 0;
					}

					.left {
						display: flex;
						align-items: center;
						
						:deep(){
							.uni-icons {
								color: $brand-theme-color !important;
							}
						}

						.text {
							padding-left: 20rpx;
							color: #666;
						}
					}

					.right {
						display: flex;
						align-items: center;

						.text {
							font-size: 28rpx;
							color: #aaa;
						}
					}
					button {
						position: absolute;
						top: 0;
						left: 0;
						height: 100rpx;
						width: 100%;
						opacity: 0;
						// 隐藏按钮

					}
				}


			}
		}

	}
</style>