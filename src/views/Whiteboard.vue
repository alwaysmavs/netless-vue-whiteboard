<template>
    <div class="whiteboard-box">
        <div class="whiteboard-box-left">
            <div class="whiteboard-toolbox-out">
                <a-toolbox v-if="room !== null" :room="room"></a-toolbox>
            </div>
            <div class="room-whiteboard" ref="whiteboard">
            </div>
        </div>
        <div class="whiteboard-box-right">
            <div class="whiteboard-box-right-up"></div>
            <div class="whiteboard-box-right-down"></div>
        </div>
    </div>
</template>

<script>
    import {WhiteWebSdk} from "white-web-sdk";
    import ToolBox from "../components/ToolBox";
    import {netlessWhiteboardApi} from "../apiMiddleware/netlessWhiteboardApi";
    export default {
        name: 'Whiteboard',
        data() {
            return {
                room: null,
            }
        },
        methods: {
            onWindowResize() {
                if (this.room) {
                    this.room.refreshViewSize();
                }
            },
            async getRoomToken (uuid) {
                const res = await netlessWhiteboardApi.joinRoomApi(uuid);
                if (res.code === 200) {
                    return res.msg.roomToken;
                } else {
                    return null;
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
            const whiteWebSdk = new WhiteWebSdk();
            const roomToken = await this.getRoomToken(uuid);
            if (uuid && roomToken) {
                const room = await whiteWebSdk.joinRoom({
                    uuid: uuid,
                    roomToken: roomToken,
                }, {
                    onPhaseChanged: phase => {
                        console.log(`room changed: ${phase}`);
                    },
                    onDisconnectWithError: error => {
                        console.error(error);
                    },
                    onKickedWithReason: reason => {
                        console.error("kicked with reason: " + reason);
                    },
                    onRoomStateChanged: modifyState => {
                        console.log(modifyState)
                    },
                });
                this.room = room;
                room.bindHtmlElement(this.$refs.whiteboard);
            }
        },
        components: {
            "a-toolbox": ToolBox
        }
    }
</script>
<style scoped lang="less">
    .whiteboard-box {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: row;
    }
    .whiteboard-box-left {
        width: 100%;
        height: 100%;
        position: relative;
    }
    .whiteboard-toolbox-out {
        width: 100%;
        height: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        z-index: 1;
        top: 32px
    }
    .room-whiteboard {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 0;
    }
    .whiteboard-box-right {
        width: 360px;
        height: 100%;
        flex-shrink: 0;
        /*background-color: green;*/
        display: flex;
        flex-direction: column;
    }
    .whiteboard-box-right-up {
        width: 100%;
        height: 320px;
        background-color: #3C3F41;
        flex-shrink: 0;
    }
    .whiteboard-box-right-down {
        width: 100%;
        height: 100%;
        background-color: white;
    }

    .whiteboard-toolbox-inner {
        background-color: #F1F3F4;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
    }
</style>

