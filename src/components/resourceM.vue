<template>
    <div style="margin-top: 80px;">
        <mu-raised-button label="添加" @click="open"/>
        <mu-dialog :open="dialog" @close="close" title="测试对话框" scrollable>
            <div class="column is-12">
                <label class="label">选择多个</label>
                <p class="control has-icon has-icon-right">
                    <mu-select-field v-model="game2" multiple>
                        <mu-menu-item value="1" title="阴阳师"/>
                        <mu-menu-item value="2" title="影之刃"/>
                        <mu-menu-item value="3" title="天下HD"/>
                        <mu-menu-item value="4" title="穿越火线"/>
                        <mu-menu-item value="5" title="英雄联盟"/>
                        <mu-menu-item value="6" title="王者荣耀"/>
                    </mu-select-field>
                </p>
            </div>
            <mu-select-field v-model="game3" label="选择你喜欢的游戏">
                <mu-menu-item value="1" title="阴阳师"/>
                <mu-menu-item value="2" title="影之刃"/>
                <mu-menu-item value="3" title="天下HD"/>
                <mu-menu-item value="4" title="穿越火线"/>
                <mu-menu-item value="5" title="英雄联盟"/>
                <mu-menu-item value="6" title="王者荣耀"/>
            </mu-select-field>
            <div class="bottom">
                <mu-raised-button label="取消" @click="close" color="#fff" backgroundColor="#0184ce"/>
                <mu-raised-button label="确定" @click="close" color="#fff" backgroundColor="#23b989"/>
            </div>
        </mu-dialog>
    </div>
</template>
<script>
export default {
    name: 'resourceM',
    data: function () {
        return {
            dialog: false,
            game3: '',
            game2: ''
        }
    },
    methods: {
        open() {
            this.dialog = true
        },
        close() {
            this.dialog = false
        }
    }
}
</script>
<style>

</style>
    