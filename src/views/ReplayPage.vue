<template>
    <div class="player-box">
        <div class="player-whiteboard" ref="whiteboard"></div>
    </div>
</template>

<script>
    import {WhiteWebSdk} from "white-web-sdk";
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
                this.player = await whiteWebSdk.replayRoom({
                    room: uuid,
                    roomToken: room_token,
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
                this.player.bindHtmlElement(this.$refs.whiteboard);
                this.player.play();
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
</style>

