<template>
    <div class="player-box">
        <div ref="whiteboard" class="whiteboard-layer"></div>
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
    }
    .whiteboard-layer {
        width: 960px;
        height: 960px;
        position: absolute;
        z-index: -1;
        background-color: yellow;
    }
</style>

