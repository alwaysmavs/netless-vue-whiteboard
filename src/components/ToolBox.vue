<template>
    <div class="tool-box">
        <div @click="selectTool(item.name)" class="tool-cell" :key='item.iconUrl' v-for="item in items">
            <img class="tool-cell-img" :src="item.iconUrl"/>
        </div>
    </div>
</template>

<script>
    import selector from '../assets/selector.svg'
    import pencil from '../assets/pencil.svg'
    import text from '../assets/text.svg'
    import eraser from '../assets/eraser.svg'
    import ellipse from '../assets/ellipse.svg'
    import rectangle from '../assets/rectangle.svg'
    export default {
        name: 'ToolBox',
        props: ['room'],
        data() {
            return {
                items: [
                    { name: 'selector', iconUrl: selector},
                    { name: 'pencil', iconUrl: pencil},
                    { name: 'text', iconUrl: text},
                    { name: 'eraser', iconUrl: eraser},
                    { name: 'ellipse', iconUrl: ellipse},
                    { name: 'rectangle', iconUrl: rectangle}
                ],
                roomObj: this.room,
            }
        },
        beforeCreate () {
        },
        mounted() {
            console.log(this.roomObj);
        },
        methods: {
            selectTool(name) {
                this.roomObj.setMemberState({
                    currentApplianceName: name,
                });
            },
        },
    }
</script>
<style scoped lang="less">
    .tool-box {
        width: 192px;
        height: 32px;
        background-color: white;
        border-radius: 4px;
        overflow: hidden;
        display: flex;
        flex-direction: row;
    }

    .tool-cell {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .tool-cell-img {
        width: 20px;
    }
</style>

