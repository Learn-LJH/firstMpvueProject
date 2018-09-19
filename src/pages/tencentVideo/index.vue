<template>
    <div class="page" style="margin:0 auto;">
        <vide 
            vid="k0024nl7rca"   
            playerid="txv" 
            height="280px"
            autoplay="true" 
        ></vide>

        <div style="margin:10px auto 0;width:200px;">
            <button @click="play" style="background-color:#76EE00;color:#fff;">play</button>
            <button @click="pause" style="background-color:#CD2626;color:#fff;">pause</button>
            <button @click="requestFullScreen" style="background-color:#E066FF;color:#fff;">requestFullScreen</button>
            <button @click="playrate" data-rate="0.5" style="background-color:#8B7500;color:#fff;">playrate 0.5</button>
            <button @click="playrate" data-rate="1" style="background-color:#8B5742;color:#fff;">playrate 1</button>
            <button @click="playrate" data-rate="1.5" style="background-color:#8B4513;color:#fff;">playrate 1.5</button>
        </div>
    </div>
</template>

<script>
const txvContext = requirePlugin("tencentvideo");
export default {
    data () {
        return {
            txvContext:''
        }
    },

    onLoad:function() {
        this.txvContext = txvContext.getTxvContext('txv');
        console.info(111);
        console.info(this.txvContext);
    },

    methods: {
        play: function () {
            this.txvContext.play();
        },
        pause: function () {
            this.txvContext.pause();
        },
        requestFullScreen: function () {
            this.txvContext.requestFullScreen();
        },
        playrate: function (e) {
            this.txvContext.playbackRate(+e.currentTarget.dataset.rate);
        }
    }
}

</script>

<style scoped>

</style>
