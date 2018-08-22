<template>
  <div>
		<div class="weui-cells__title">带图标、说明的列表项</div>
		<div class="weui-cells weui-cells_after-title">
			<div class="weui-cell">
				<div class="weui-cell__hd">
					<image :src="icon" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"></image>
				</div>
				<div class="weui-cell__bd">标题文字</div>
				<div class="weui-cell__ft">说明文字</div>
			</div>
			<div class="weui-cell">
				<div class="weui-cell__hd">
						<image :src="icon" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"></image>
				</div>
				<div class="weui-cell__bd">标题文字</div>
				<div class="weui-cell__ft">说明文字</div>
			</div>
		</div>
    <a href="/pages/index/main" class="home">去往首页</a>
  </div>
</template>

<script>

export default {
	data () {
    return {
      icon: '/static/images/icon_nav_button.png'
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
