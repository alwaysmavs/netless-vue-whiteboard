<template>
    <div class="test-box">
        <a-tabs class="test-tab" defaultActiveKey="1" @change="callback">
            <a-tab-pane tab="进入实时房间" key="1">

            </a-tab-pane>
            <a-tab-pane tab="进入回放房间" key="2">

            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { Button, Tabs, Input, Form } from 'ant-design-vue'
    Vue.use(Button);
    Vue.use(Tabs);
    Vue.use(Tabs.TabPane);
    Vue.use(Input);
    Vue.use(Form);
    Vue.use(Form.Item);
    export default {
        name: 'TestPage',
        data() {
            return {
                tabKey: "1",
                formItemLayout: {
                    labelCol: {
                        xs: {span: 24},
                        sm: {span: 8},
                    },
                    wrapperCol: {
                        xs: {span: 24},
                        sm: {span: 16},
                    },
                },
            }
        },
        beforeCreate () {
            this.form = this.$form.createForm(this);
        },
        methods: {
            handleSubmit (e) {
                e.preventDefault();
                if (this.tabKey === "1") {
                    this.form.validateFields((err, values) => {
                        if (!err) {
                            this.$router.push({path: `/room/${values.uuid}/${values.room_token}`})
                        }
                    });
                }
            },
            handleReplaySubmit (e) {
                e.preventDefault();
                if (this.tabKey === "2") {
                    this.form.validateFields((err, values) => {
                        console.log('Received values of form: ', values);
                        if (!err) {
                            this.$router.push({path: `/replay/${values.uuid_replay}/${values.room_token_replay}`})
                        }
                    });
                }
            },
            callback(key) {
                this.tabKey = key;
            }
        },
    }
</script>
<style scoped lang="less">
    .test-box {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .test-tab {
        width: 300px;
    }

    .test-tab-inner-box {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
</style>

