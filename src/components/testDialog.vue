<template>
    <div>
        <mu-dialog :open="showStatus" dialogClass="dialogCss" @close="close" title="项目管理" scrollable>
            <form name="projForm" ng-submit="save(projForm.$valid)" novalidate class="ui-dialog-form">
                <table class="ui-dialog-grid">
                    <tbody>
                        <tr>
                            <td style="padding:0" class="ui-dialog-body">
                            <div class="ui-dialog-content">
                                <div class="js_add_condition_box">
                                    <table width="100%" class="table-info05 mgt-20">
                                        <colgroup>
                                        <col width="30%">
                                        <col width="70%">
                                        </colgroup>
                                        <tr>
                                        <th valign="top">项目编码:</th>
                                        <td>
                                            <input type="text" style="width:188px" name="projectCode" v-model="projectCode" placeholder="支持字母，数字，下划线" required class="ipt-sty02 fs-12 ipt-click js_ipt_click mgr-20">
                                        </td>
                                        </tr>
                                        <tr>
                                        <th valign="top">项目名称:</th>
                                        <td>
                                            <input type="text" style="width:188px" name="projectName" v-model="projectName" required class="ipt-sty02 fs-12 ipt-click js_ipt_click mgr-20">
                                        </td>
                                        </tr>
                                        <tr>
                                        <th valign="top">项目状态:</th>
                                        <td>
                                            <input type="text" style="width:188px" name="version" v-model="version" placeholder="例如：V1,V1.0,V1.0.0" required class="ipt-sty02 fs-12 ipt-click js_ipt_click mgr-20">
                                        </td>
                                        </tr>
                                        <tr>
                                        <th valign="top">描述:</th>
                                        <td>
                                            <textarea v-model="description" style="width:188px" class="textarea-sty01 ipt-click"></textarea>
                                        </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>

            <mu-flat-button primary label="关闭" @click="close" slot="actions"/>
        </mu-dialog>
    </div>
</template>

<script>
export default {
    props: ['showStatus'],
    name: 'testDialog',
    data: function () {
        return {
            projectCode: '',
            projectName: '',
            version: '',
            description: ''
        }
    },
    methods: {
        close: function () {
            this.$emit('update:showStatus', false)
        }
    }
}
</script>
<style>
    .dialogCss {
        width: 400px;height:400px;
    }
</style>

