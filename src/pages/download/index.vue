<template>
    <div class="page">

        <canvas canvas-id="myCanvas" :style="{width: canvas_mes.width + 'px', height: canvas_mes.height + 'px'}"></canvas>
        <button style="margin-top:30rpx;" @click="downloadImg">下载二维码</button>
    </div>
</template>

<script>

import {getSystemInfo, canvasToTempFilePath, saveImageToPhotosAlbum} from '../../utils/wx'

export default {
    data () {
        return {
            img_path:{
                background:'/static/images/background.png',
                name_path:'/static/images/person.jpg',
                phone_path:'/static/images/phone.jpg',
                qq_path:'/static/images/qq.png',
                email_path:'/static/images/email.jpg',
                code_path:'/static/images/wx.png'
            },
            message:{
                name:"李佳洪",
                phone:"15723643279",
                qq:"859628643",
                email:"leny.66@foxmail.com",
                code:"长按识别二维码"
            },
            canvas_mes:{
                width:0,
                height:0
            },
            last_path:''
        }
    },

    mounted() {
        let _this = this;
        
        _this.getSystemInfo();
    }, 

    methods: {
        async getSystemInfo() {
            let _this = this;
            let res = await getSystemInfo();
            _this.canvas_mes.width = res.screenWidth;
            _this.canvas_mes.height = res.screenHeight*0.7;
            _this.initCanvas();
            console.info(res);
        },  

        initCanvas() {
            let _this = this;
            let cv = wx.createCanvasContext('myCanvas');
            cv.clearRect(0, 0, 0, 0);

            //绘制背景图片
            let background_path = {
                path:_this.img_path.background,
                dx:0,
                dy:0,
                width:375,
                height:800
            }
            cv.drawImage(background_path.path, background_path.dx, background_path.dy, background_path.width, background_path.height);

            //绘制姓名背景图片
            let person_path = {
                path:_this.img_path.name_path,
                dx:50,
                dy:50,
                width:30,
                height:30
            }
            cv.drawImage(person_path.path,person_path.dx,person_path.dy,person_path.width,person_path.height);

            //绘制姓名内容
            let person_name = {
                text:_this.message.name,
                x:100,
                y:75,
                font_size:18,
                color:'#4F5E6F'
            };
            cv.setFillStyle(person_name.color);
            cv.setFontSize(person_name.font_size);
            cv.fillText(person_name.text, person_name.x, person_name.y);

            //绘制电话背景图片
            let phone_path = {
                path:_this.img_path.phone_path,
                dx:50,
                dy:100,
                width:30,
                height:30
            }
            cv.drawImage(phone_path.path, phone_path.dx, phone_path.dy, phone_path.width, phone_path.height);

            //绘制电话内容
            let phone_name = {
                text:_this.message.phone,
                x:100,
                y:125,
                font_size:18,
                color:'#4F5E6F'
            };
            cv.setFillStyle(phone_name.color);
            cv.setFontSize(phone_name.font_size);
            cv.fillText(phone_name.text, phone_name.x, phone_name.y);

            //绘制QQ背景图片
            let qq_path = {
                path:_this.img_path.qq_path,
                dx:50,
                dy:150,
                width:30,
                height:30
            }
            cv.drawImage(qq_path.path, qq_path.dx, qq_path.dy, qq_path.width, qq_path.height);

            //绘制QQ内容
            let qq_name = {
                text:_this.message.qq,
                x:100,
                y:175,
                font_size:18,
                color:'#4F5E6F'
            };
            cv.setFillStyle(qq_name.color);
            cv.setFontSize(qq_name.font_size);
            cv.fillText(qq_name.text, qq_name.x, qq_name.y);

            //绘制邮箱背景图片
            let email_path = {
                path:_this.img_path.email_path,
                dx:50,
                dy:200,
                width:30,
                height:30
            }
            cv.drawImage(email_path.path, email_path.dx, email_path.dy, email_path.width, email_path.height);

            //绘制邮箱内容
            let email_name = {
                text:_this.message.email,
                x:100,
                y:225,
                font_size:18,
                color:'#4F5E6F'
            };
            cv.setFillStyle(email_name.color);
            cv.setFontSize(email_name.font_size);
            cv.fillText(email_name.text, email_name.x, email_name.y);

            //绘制二维码图片
            let code_path = {
                path:_this.img_path.code_path,
                dx:120,
                dy:250,
                width:150,
                height:150
            }
            cv.drawImage(code_path.path, code_path.dx, code_path.dy, code_path.width, code_path.height);

            //绘制二维码内容
            let code_name = {
                text:_this.message.code,
                x:150,
                y:420,
                font_size:14,
                color:'#C5CDD6'
            };
            cv.setFillStyle(code_name.color);
            cv.setFontSize(code_name.font_size);
            cv.fillText(code_name.text, code_name.x, code_name.y);

            cv.draw(false, function() {
                _this.saveImg();
            });
        },

        async saveImg() {
            let _this = this;
            let condition = {
                x:0,
                y:0,
                width:_this.canvas_mes.width,
                height:_this.canvas_mes.height,
                destWidth:_this.canvas_mes.width*4,
                destHeight:_this.canvas_mes.height*4,
                canvasId:'myCanvas',
                fileType:'jpg'
            }

            let res = await canvasToTempFilePath(condition);
            _this.last_path = res.tempFilePath;
            console.info(_this.last_path);
        },

        async downloadImg() {
            let _this = this;
            console.info(1221);
            //let res = await 
            saveImageToPhotosAlbum(_this.last_path).then(function(res) {
                wx.showToast({
                    duration: 3000,
                    icon: 'none',
                    title: '保存图片成功！',
                    mask: true
                });
            }).catch(function(res) {
                console.info(res);
                wx.showToast({
                    duration: 3000,
                    icon: 'none',
                    title: '保存图片失败，请重试！',
                    mask: true
                });
            })
        }
    }
}

</script>

<style scoped>

</style>
