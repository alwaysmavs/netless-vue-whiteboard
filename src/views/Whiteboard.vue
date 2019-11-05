<template>
    <div id="nsawhiteboard" class="whiteboard-box">
    </div>
</template>

<script>
    import {netlessWhiteboardApi} from "../apiMiddleware/netlessWhiteboardApi";
    import AgoraRTC from "agora-rtc-sdk";
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
            const roomToken = await this.getRoomToken(uuid);
            if (uuid && roomToken) {
                window.WhiteFastSDK.Room("nsawhiteboard",{
                    uuid: uuid,
                    roomToken: roomToken,
                    userId: "98888",
                    userName: "netless", // 可选，名字
                    userAvatarUrl: "https://ohuuyffq2.qnssl.com/netless_icon.png", // 可选，头像
                    logoUrl: "", // 可选，头像
                    toolBarPosition: "left", // 可选，工具栏位置
                    pagePreviewPosition: "right", // 可选，预览侧边的位置
                    boardBackgroundColor: "#F2F2F2", // 可选，白板背景颜色
                    isReadOnly: false, // 可选，订阅者是否可以操作
                    identity: "host", // 可选，身份 host, guest, listener
                    defaultColorArray: [
                        "#E77345",
                        "#005BF6",
                        "#F5AD46",
                        "#68AB5D",
                        "#9E51B6",
                        "#1E2023",
                    ], // 可选，教具颜色列表，可通过界面进行添加新颜色，添加后 colorArrayStateCallback 会回调所有颜色列表
                    rtc: {
                        type: "agora",
                        rtcObj: AgoraRTC,
                        token: "8595fd46955f427db44b4e9ba90f015d",
                    }, // 可选，这里以声网为例
                    language: "Chinese", // 启用英文为 "English"
                    isManagerOpen: true, // 侧边控制栏目是否默认打开
                    uploadToolBox: [
                        {
                            enable: true, // true 为启用， false 为尽用
                            type: "image", // image（图片）、static_conversion（静态 ppt）、dynamic_conversion (动态 ppt)
                            icon: "", // 图片 icon
                            title: "", // 标题
                            script: "", // 描述
                        },
                        {
                            enable: true,
                            type: "static_conversion",
                            icon: "",
                            title: "",
                            script: "",
                        },
                        {
                            enable: true,
                            type: "dynamic_conversion",
                            icon: "",
                            title: "",
                            script: "",
                        },
                    ], // 侧边上传按钮是否启用
                });
            }
        },
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

