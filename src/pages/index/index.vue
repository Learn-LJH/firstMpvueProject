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
<button open-type="getUserInfo" @click="getUserInfo">11</button> 
<button open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber"> 22</button> 
    <div class="page" style="margin-top:50px;">
      <!-- <div class="weui-footer">
        <div class="weui-footer__text">Copyright © 2008-2018 weui.io</div>
      </div>

      <div class="weui-footer">
        <div class="weui-footer__links">
          <navigator url="" class="weui-footer__link">底部链接</navigator>
        </div>
        <div class="weui-footer__text">Copyright © 2008-2018 weui.io</div>
      </div>

      <div class="weui-footer">
        <div class="weui-footer__links">
          <navigator url="" class="weui-footer__link">底部链接</navigator>
          <navigator url="" class="weui-footer__link">底部链接</navigator>
        </div>
        <div class="weui-footer__text">Copyright © 2008-2018 weui.io</div>
      </div> -->

      <div class="weui-footer weui-footer_fixed-bottom">
        <div class="weui-footer__links">
          <navigator url="/pages/counter/main" class="weui-footer__link">WeUI首页</navigator>
        </div>
        <div class="weui-footer__text">Copyright © 2008-2018 weui.io</div>
      </div>
    </div>

    <!-- <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a> 
    <a href="/pages/resume/main" class="counter">test</a>-->  
    
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      grids: [
        { src: '/static/images/person.jpg', name: '个人信息', url: '/pages/resume/main' },
        { src: '/static/images/icon_nav_cell.png', name: 'Cell', url: '/pages/resume/main' },
        { src: '/static/images/icon_nav_toast.png', name: 'Toast', url: '/pages/resume/main' },
        { src: '/static/images/icon_nav_dialog.png', name: 'Dialog', url: '/pages/resume/main' },
        { src: '/static/images/icon_nav_button.png', name: 'Progress', url: '/pages/resume/main' },
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

  getPhoneNumber: function(e) { 
      console.log(e.detail.errMsg) 
      console.log(e.detail.iv) 
      console.log(e.detail.encryptedData) 
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

    getPhoneNumber: function(e) { 
      console.log(e.detail.errMsg) 
      console.log(e.detail.iv) 
      console.log(e.detail.encryptedData) 
    } ,
  
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    //this.getUserInfo()
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
  margin-top: 50px;
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
