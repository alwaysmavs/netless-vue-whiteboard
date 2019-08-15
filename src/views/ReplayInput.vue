<template>
    <div>
        <router-link to="/">
            <img class="replay-logo" src="../assets/netless_black.svg"/>
        </router-link>
        <div class="test-box">
            <a-form
                    style="margin-top: 24px"
                    :form="form"
                    @submit="handleReplaySubmit">
                <a-form-item
                        v-bind="formItemLayout"
                        label="roomToken" hasFeedback>
                    <a-input
                            size="large"
                            v-decorator="[
                                'room_token_replay',
                                {
                                rules: [{
                                  required: true, message: '请输入 roomToken',
                                }],
                            }
                        ]"
                            placeholder="roomToken"/>
                </a-form-item>
                <a-form-item
                        v-bind="formItemLayout"
                        hasFeedback
                        label="uuid">
                    <a-input
                            size="large"
                            v-decorator="[
                                'uuid_replay',
                                {
                                rules: [{
                                  required: true, message: '请输入 uuid',
                                }],
                            }
                        ]"
                            placeholder="uuid"/>
                </a-form-item>
                <!--<a-form-item-->
                        <!--v-bind="formItemLayout"-->
                        <!--hasFeedback-->
                        <!--label="start_time">-->
                    <!--<a-input-->
                            <!--size="large"-->
                            <!--v-decorator="[-->
                                <!--'start_time',-->
                                <!--{-->
                                <!--rules: [{-->
                                  <!--message: '开始时间',-->
                                <!--}],-->
                            <!--}-->
                        <!--]"-->
                            <!--placeholder="输入开始时间"/>-->
                <!--</a-form-item>-->
                <!--<a-form-item-->
                        <!--v-bind="formItemLayout"-->
                        <!--hasFeedback-->
                        <!--label="during">-->
                    <!--<a-input-->
                            <!--size="large"-->
                            <!--v-decorator="[-->
                                <!--'during',-->
                                <!--{-->
                                <!--rules: [{-->
                                  <!--message: '播放时长',-->
                                <!--}],-->
                            <!--}-->
                        <!--]"-->
                            <!--placeholder="输入播放时长"/>-->
                <!--</a-form-item>-->
                <a-form-item
                        v-bind="formItemLayout"
                        hasFeedback
                        label="media">
                    <a-input
                            size="large"
                            v-decorator="[
                                'media',
                                {
                                rules: [{
                                  message: '输入音视频文件源',
                                }],
                            }
                        ]"
                            placeholder="音视频文件源"/>
                </a-form-item>
                <a-form-item
                        v-bind="formItemLayout"
                        hasFeedback
                        style="margin-left: 149px">
                    <a-button
                            size="large"
                            type="primary"
                            htmlType="submit"
                            class="token-button">
                        进入回放
                    </a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { Button, Input, Form } from 'ant-design-vue'
    Vue.use(Button);
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
            handleReplaySubmit (e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    console.log('Received values of form: ', values);
                    if (!err) {
                        this.$router.push({path: `/replay/${values.uuid_replay}/${values.room_token_replay}`})
                    }
                });
            },
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

    .replay-logo {
        cursor: pointer;
        position: absolute;
        left: 48px;
        top: 48px;
    }

    .test-tab-inner-box {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
</style>

