<template>
    <div class="page">
        <div class='index-hd'>
            <image class='index-logo' src='/static/images/component.jpg'></image>
            <div class='index-desc'>以下将展示几种常见的插件，开发者可根据自身需求添加插件使用，具体插件见GitHub</div>
        </div>

        <div class="weui-cells__title">插件列表</div>
        <div class="weui-cells weui-cells_after-title">
            <navigator url="/pages/comment/main" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                <div class="weui-cell__bd">comment</div>
                <div class="weui-cell__ft weui-cell__ft_in-access"></div>
            </navigator>
            <navigator url="/pages/tencentVideo/main" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                <div class="weui-cell__bd">tencent video</div>
                <div class="weui-cell__ft weui-cell__ft_in-access"></div>
            </navigator>
            <navigator url="/pages/yuanful/main" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                <div class="weui-cell__bd">yuanful-ui</div>
                <div class="weui-cell__ft weui-cell__ft_in-access"></div>
            </navigator>
            <navigator url="/pages/icon/main" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                <div class="weui-cell__bd">icon</div>
                <div class="weui-cell__ft weui-cell__ft_in-access"></div>
            </navigator>
            </navigator>
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
    .weui-cell {
        padding: 30rpx !important;
    }
</style>
