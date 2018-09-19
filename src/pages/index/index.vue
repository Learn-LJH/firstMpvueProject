<template>
  <div class="container" @click="clickHandle('test click', $event)">
 
    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="page" style="margin-top:100rpx;">
      <div class="page__bd">
        <div class="weui-grids">
          <block v-for="item in grids" :key="index">
            <navigator :url="item.url" class="weui-grid" hover-class="weui-grid_active">
              <image class="weui-grid__icon" :src="item.src" />
              <div class="weui-grid__label">{{item.name}}</div>
            </navigator>
          </block>
        </div>
      </div>
    </div>

    <button open-type="getUserInfo" @click="getUserInfo">load</button> 

    <div class="page" style="margin-top:50px;">
      <div class="weui-footer weui-footer_fixed-bottom">
        <div class="weui-footer__links">
          <navigator url="/pages/counter/main" class="weui-footer__link">lijiahong首页</navigator>
        </div>
        <div class="weui-footer__text">Copyright © 2014-2018 lijiahong.io</div>
      </div>
    </div>

    <!-- <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a> 
    <a href="/pages/resume/main" class="counter">test</a>-->  

  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      userInfo: {},
      grids: [
        { src: '/static/images/person.jpg', name: 'information', url: '/pages/resume/main' },
        { src: '/static/images/download.png', name: 'download', url: '/pages/download/main' },
        { src: '/static/images/component.jpg', name: 'component', url: '/pages/component/main' },
        { src: '/static/images/icon_nav_dialog.png', name: 'Dialog', url: '/pages/resume/main' },
        { src: '/static/images/icon_nav_panel.png', name: 'Progress', url: '/pages/resume/main' },
        { src: '/static/images/icon_nav_panel.png', name: 'Msg', url: '/pages/resume/main' },
        { src: '/static/images/icon_nav_article.png', name: 'Article', url: '/pages/resume/main' },
        { src: '/static/images/icon_nav_actionSheet.png', name: 'ActionSheet', url: '/pages/resume/main' },
        { src: '/static/images/icon_nav_icons.png', name: 'Icons', url: '/pages/resume/main' }
      ]
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              console.info(res.userInfo);
              this.userInfo = res.userInfo;
            }
          })
        }
      })
    },
  
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 30px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
