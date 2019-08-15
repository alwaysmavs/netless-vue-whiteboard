<template>
    <div class="player-box">
        <a-button v-if="play !== null" type="primary" @click="start">开始</a-button>
        <div class="player-video">
            <video class="video-js video-layout"
                   id="white-sdk-video-js"></video>
        </div>
        <div class="player-whiteboard" ref="whiteboard"></div>
    </div>
</template>

<script>
    import {WhiteWebSdk} from "white-web-sdk";
    import "video.js/dist/video-js.css";
    export default {
        name: 'ReplayPage',
        data() {
            return {
                play: null,
            }
        },
        methods: {
            onWindowResize() {
                if (this.player) {
                    this.player.refreshViewSize();
                }
            },
            start () {
                this.play.play();
            }
        },
        beforeMount(){
            window.addEventListener("resize", this.onWindowResize);
        },
        beforeDestroy(){
            window.removeEventListener("resize", this.onWindowResize);
        },
        async mounted() {
            const uuid = this.$route.params.uuid;
            const room_token = this.$route.params.room_token;
            const whiteWebSdk = new WhiteWebSdk();
                if (uuid && room_token) {
                    let media = this.$route.params.media;
                    if (!media) {
                        media = "8311a131bd4475d6b4522590deb63fd5_ce9bf22534ee41928b0b9203ef0c3248.m3u8";
                    }
                    const mediaUrl = `https://netless-media.oss-cn-hangzhou.aliyuncs.com/${media}`;
                    const player = await whiteWebSdk.replayRoom({
                        room: uuid,
                        roomToken: room_token,
                        mediaURL: mediaUrl,
                    }, {
                        onPhaseChanged: phase => {
                            console.log(phase);
                        },
                        onLoadFirstFrame: () => {
                        },
                        onPlayerStateChanged: modifyState => {
                            console.log(modifyState);
                        },
                        onStoppedWithError: error => {
                            console.log(error);
                        },
                        onScheduleTimeChanged: scheduleTime => {
                            console.log(scheduleTime);
                        },
                    });
                    player.bindHtmlElement(this.$refs.whiteboard);
                    this.play = player;
                }
        },
    }
</script>
<style scoped lang="less">
    .player-box {
        width: 100%;
        height: 100vh;
        text-align: left;
    }
    .player-whiteboard {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
    }

    .player-video {
        width:300px;
        height: 300px;
        position: absolute;
        z-index: 1;
        background-color: black;
    }

    .video-layout {
        width: 300px;
        height: 300px;
    }
</style>

