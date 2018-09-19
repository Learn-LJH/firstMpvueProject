<template>
    <div class="page">
        <div class='index-hd'>
            <image class='index-logo' src='/static/images/yuanfu.png'></image>
            <div class='index-desc'>这是一套可添加到小程序内直接使用的功能插件，无需重复开发，为用户提供更丰富的服务。</div>
        </div>

        
        <div class="weui-cells__title">loading</div>
        <div class="weui-cells weui-cells_after-title" style="height:40px;">
            <loading type="default"/>
        </div>
        <div class="weui-cells weui-cells_after-title" style="height:40px;">
            <loading type="cube" />
        </div>
        <div class="weui-cells weui-cells_after-title" style="height:40px;">
            <loading type="pulse"/>
        </div>

        <div class="weui-cells__title">icon</div>
        <div class="weui-cells weui-cells_after-title" style="text-align:center;">
            <ico theme="deep-blue" icon="shouye" size="50rpx" />
            <ico theme="deep-blue" icon="link" size="50rpx" />
            <ico theme="deep-blue" icon="select" size="50rpx" />
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            
        }
    },
    methods: {

    }
}

</script>

<style scoped>
    .index-hd {
        padding: 80rpx;
        text-align: center;
    }
    .index-logo {
        width: 86rpx;
        height: 86rpx;
    }
    .index-desc {
        margin-top: 20rpx;
        color: #888888;
        font-size: 28rpx;
    }
    
</style>
