<template>
    <div class="test-box">
        <router-link to="/">
            <img class="logo" src="../assets/netless_black.svg"/>
        </router-link>
        <a-form
                style="margin-top: 24px"
                :form="form"
                @submit="handleSubmit">
            <a-form-item
                    v-bind="formItemLayout"
                    label="roomToken"
            >
                <a-input
                        size="large"
                        placeholder="roomToken"
                        v-decorator="[
                                'room_token',
                                {
                                rules: [{
                                  required: true, message: '请输入 roomToken',
                                }],
                            }
                        ]"/>
            </a-form-item>
            <a-form-item v-bind="formItemLayout" label="uuid">
                <a-input
                        size="large"
                        placeholder="uuid"
                        v-decorator="[
                                'uuid',
                                {
                                rules: [{
                                  required: true, message: '请输入 uuid',
                                }],
                            }
                        ]"/>
            </a-form-item>
            <a-form-item style="margin-left: 149px">
                <a-button
                        size="large"
                        type="primary"
                        htmlType="submit"
                        class="token-button">
                    进入房间
                </a-button>
            </a-form-item>
        </a-form>
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

    .logo {

    }

    .test-tab-inner-box {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
</style>

