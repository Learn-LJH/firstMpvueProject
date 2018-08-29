<template>
  <!-- <a href="/pages/index/main" class="home">去往首页</a> -->

<div class="page">
    <div class="page__hd" style="height:60px;margin:20px;">
        <div class="page__title" >求职意向</div>
        <div class="page__desc" style="color:#CD3700;font-size:12px;">前端开发工程师</div>
    </div>

    <div>
        <div style="height:1px;width:100%;background-color:#ccc;"></div>
        <div class="weui-cells__title" style="color:#FFA500">基本信息</div>
        <div class="weui-cells weui-cells_after-title">
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <image src="/static/images/person.jpg" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"></image>
                </div>
                <div class="weui-cell__bd">姓名</div>
                <div class="weui-cell__ft">李佳洪</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <image src="/static/images/phone.jpg" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"></image>
                </div>
                <div class="weui-cell__bd">电话</div>
                <div class="weui-cell__ft">15723643279</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <image src="/static/images/qq.png" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"></image>
                </div>
                <div class="weui-cell__bd">QQ</div>
                <div class="weui-cell__ft">859628643</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <image src="/static/images/email.jpg" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"></image>
                </div>
                <div class="weui-cell__bd">邮箱</div>
                <div class="weui-cell__ft">leny.66@foxmail.com</div>
            </div>
        </div>
    </div>
        

    <div style="margin-top:20rpx;">
        <div style="height:1px;width:100%;background-color:#ccc;"></div>
        <div class="weui-cells__title" style="color:#FFA500">教育背景</div>
		<div class="weui-cells weui-cells_after-title">
			<div class="weui-cell">
				<div class="weui-cell__hd">
                    <image src="/static/images/school.png" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"></image>
				</div>
				<div class="weui-cell__bd">学校</div>
				<div class="weui-cell__ft">重庆理工大学</div>
			</div>
			<div class="weui-cell">
				<div class="weui-cell__hd">
					<image src="/static/images/study.jpg" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"></image>
				</div>
				<div class="weui-cell__bd">学历</div>
				<div class="weui-cell__ft">本科</div>
			</div>
			<div class="weui-cell">
				<div class="weui-cell__hd">
                    <image src="/static/images/time.png" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"></image>
				</div>
				<div class="weui-cell__bd">时间</div>
				<div class="weui-cell__ft">2014.9--2018.7</div>
			</div>
			<div class="weui-cell">
				<div class="weui-cell__hd">
                    <image src="/static/images/detail.png" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"></image>
				</div>
				<div class="weui-cell__bd">备注</div>
				<div class="weui-cell__ft">获得大家杯三等奖、乙等奖学金</div>
			</div>
		</div>
    </div>
    
    <div class="weui-panel weui-panel_access">
        <div class="weui-panel__hd" style="color:#FFA500">项目经验</div>
        <div class="weui-panel__bd">
            <div class="weui-media-box weui-media-box_text">
                <div class="weui-media-box__title weui-media-box__title_in-text">2018.7--2018.8&nbsp;&nbsp;&nbsp;&nbsp;BOS系统</div>
                <div class="weui-media-box__desc">参与商家列表-详情优化：添加“是否三照合一”字段和添加判空条件。</div>
            </div>
            <div class="weui-media-box weui-media-box_text">
                <div class="weui-media-box__title weui-media-box__title_in-text">2018.8--2018.9&nbsp;&nbsp;&nbsp;&nbsp;招财贷</div>
                <div class="weui-media-box__desc">新增录入“巡检工单”功能；新增“选择商户”界面；修改“待拜访”工单信息；添加审核功能。</div>
            </div>
        </div>
        <div class="weui-panel__ft">
            <div class="weui-cell weui-cell_access weui-cell_link" @click="gotoMore()">
                <div class="weui-cell__bd">查看更多</div>
                <div class="weui-cell__ft weui-cell__ft_in-access"></div>
            </div>
        </div>
    </div>

	<div class="weui-panel weui-panel_access">
        <div class="weui-panel__bd">
          <navigator url="/pages/skill/main" class="weui-media-box weui-media-box_appmsg" hover-class="weui-cell_active">
            <div class="weui-media-box__hd weui-media-box__hd_in-appmsg">
              <image class="weui-media-box__thumb" src="/static/images/power.jpg" />
            </div>
            <div class="weui-media-box__bd weui-media-box__bd_in-appmsg">
              <div class="weui-media-box__title">个人技能</div>
              <div class="weui-media-box__desc">熟悉HTML、CSS、JavaScript、jQuery等前端技术。了解angular、Vue等前端框架。熟练使用vscode、chrome等开发工具。</div>
            </div>
          </navigator>
          <navigator url="/pages/evaluate/main" class="weui-media-box weui-media-box_appmsg" hover-class="weui-cell_active">
            <div class="weui-media-box__hd weui-media-box__hd_in-appmsg">
              <image class="weui-media-box__thumb" src="/static/images/pingjia.jpg" />
            </div>
            <div class="weui-media-box__bd weui-media-box__bd_in-appmsg">
              <div class="weui-media-box__title">自我评价</div>
              <div class="weui-media-box__desc">本人性格开朗，为人细心，做事一丝不苟，能吃苦耐劳，工作脚踏实地，有较强的责任心，具有团队合作精神，又具有较强的独立工作能力，思维活跃。</div>
            </div>
          </navigator>
        </div>
    </div>
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
        gotoMore: function() {
            let _this = this;
            _this.name = "abc";
            wx.navigateTo({
                url: `/pages/projects/main?id=${_this.name}`
            })
        }
    }
}
</script>

<style>

</style>
