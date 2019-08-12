<template>
    <div class="hp-box">
        <img src="../assets/netless_black.svg"/>
        <div class="page-input-left-box">
            <div class="page-input-left-mid-box">
                <a-tabs class="page-input-left-mid-box-tab" defaultActiveKey="1">
                    <a-tab-pane tab="创建房间" key="1">
                        <div class="page-input-left-inner-box">
                            <a-input class="page-input" size="large" placeholder="输入用户名"/>
                            <router-link to="/classroom">
                                <a-button
                                        size="large"
                                        type="primary"
                                        class="name-button">
                                    创建在线教室
                                </a-button>
                            </router-link>
                            <a-button
                                    size="large"
                                    class="name-button">
                                创建白板房间
                            </a-button>
                        </div>
                    </a-tab-pane>
                    <a-tab-pane tab="加入房间" key="2">
                        <div class="page-input-left-inner-box">
                            <a-input class="page-input"
                                     size="large" placeholder="输入房间地址或者 UUID"/>
                            <a-button
                                    size="large"
                                    type="primary"
                                    class="name-button">
                                加入房间
                            </a-button>
                        </div>
                    </a-tab-pane>
                </a-tabs>
            </div>
        </div>
        <div class="page-input-right-box"></div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Vue from 'vue'
    import { Button, Tabs, Input } from 'ant-design-vue'
    Vue.use(Button);
    Vue.use(Tabs);
    Vue.use(Tabs.TabPane);
    Vue.use(Input);
    export default {
        name: 'Homepage',
    }
</script>
<style scoped lang="less">
    .hp-box {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: row;
        background-color: white;
        img {
            cursor: pointer;
            position: absolute;
            margin-left: 48px;
            margin-top: 48px;
        }
    }
    .page-input-left-box {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .page-input-left-mid-box {
        width: 360px;
        height: 320px;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        padding-right: 20px;
        padding-left: 20px;
        border-radius: 8px;
        box-shadow: 0 0 16px #E7EAEE;
    }
    .page-input-left-mid-box-tab {
        width: 300px;
        margin-top: 12px;
    }
    .page-input {
        width: 240px;
        font-size: 14px;
    }
    .name-button {
        width: 240px;
        margin-top: 24px;
        font-size: 14px;
    }
    .page-input-left-mid-box-tab {
        width: 300px;
        margin-top: 12px;
    }
    .page-input-left-inner-box {
        height: 220px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 8px;
    }
    .page-input-right-box {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: url("../assets/name_bg.jpg") no-repeat scroll center center;
    }

</style>

