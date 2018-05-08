<template>
    <transition name="slide">
        <div>
            <h3> 用户管理</h3>
            <input type="text" v-model="aaa" name="name" />
            <button class="btn btn-green" @click="showError()">error</button>
            <button class="btn btn-gray" @click="showSuccess()">success</button>
            <button class="btn btn-blue" @click="showInfo()">info</button>
            <button class="btn btn-green" @click="showWarning()">warning</button>

            <div>
                <mu-raised-button label="测试对话框" @click="open"/>
                <mu-dialog :open="dialog" @close="close" title="测试对话框" scrollable>
                    <mu-table multiSelectable enableSelectAll ref="table">
                        <mu-thead>
                            <mu-tr>
                                <mu-th>ID</mu-th>
                                <mu-th>Name</mu-th>
                                <mu-th>Status</mu-th>
                            </mu-tr>
                            </mu-thead>
                            <mu-tbody>
                            <mu-tr>
                                <mu-td>1</mu-td>
                                <mu-td>John Smith</mu-td>
                                <mu-td>Employed</mu-td>
                            </mu-tr>
                            <mu-tr>
                                <mu-td>2</mu-td>
                                <mu-td>Randal White</mu-td>
                                <mu-td>Unemployed</mu-td>
                            </mu-tr>
                            <mu-tr>
                                <mu-td>3</mu-td>
                                <mu-td>Stephanie Sanders</mu-td>
                                <mu-td>Employed</mu-td>
                            </mu-tr>
                            <mu-tr>
                                <mu-td>4</mu-td>
                                <mu-td>Steve Brown</mu-td>
                                <mu-td>Employed</mu-td>
                            </mu-tr>
                        </mu-tbody>
                        <mu-tfoot slot="footer">
                            <mu-tr>
                                <paginate
                                    :page-count="20"
                                    :page-range="3"
                                    :margin-pages="2"
                                    :click-handler="clickCallback"
                                    :prev-text="'上一页'"
                                    :next-text="'下一页'"
                                    :container-class="'pagination'"
                                    :page-class="'page-item'">
                                </paginate>
                            </mu-tr>
                        </mu-tfoot>
                    </mu-table>
                    
                    <div class="bottom">
                        <mu-raised-button style="margin-left: 35%;" label="取消" @click="close" color="#fff" backgroundColor="#0184ce"/>
                        <mu-raised-button label="确定" @click="close" color="#fff" backgroundColor="#23b989"/>
                    </div>
                </mu-dialog>
            </div>

            <button class="btn btn-green" @click="showDialog()">弹窗</button>
            <my-component :showStatus.sync="showChild"/>
        </div>
    </transition>
</template>

<script>
import testDialog from '@/components/testDialog'

export default {
    components: {
        'my-component': testDialog
    },
    methods: {
        showSuccess: function () {
            this.$swal({
                title: "Good Job!",
                text: "操作成功",
                icon: "success",
                button: "确定",
            })
        },
        showError: function () {
            this.$swal({
                title: "Oh SUCK!",
                text: "操作失败",
                icon: "error",
                button: "确定",
            })
        },
        showWarning: function () {
            this.$swal({
                title: "WOOOOW!",
                text: "和理想有点不一样哦",
                icon: "warning",
                button: "确定",
            })
        },
        showInfo: function () {
            // var aaa = {
            //         blncUplimit: '',
            //         calType: ''
            //     },
            //     param = {
            //         jsonparam: aaa
            //     };

            // axios.post('../../iease/scene/save_base', param)
            //     .then(function (response) {
            //         console.log(response);
            // });

            this.$swal({
                title: "操作信息",
                text: "差不多检查下参数吧",
                icon: "info",
                button: "确定",
            })
            
        },
        showDialog: function () {
            this.showChild = true;
        },
        open () {
            this.dialog = true
        },
        close () {
            this.dialog = false
        },
        clickCallback: function(pageNum)  {
            console.log(pageNum)
        }
    },
    data: function () {
        return {
            dialog: false,
            aaa: 1111,
            showChild: false,
        }
    }
}
</script>

<style>
thead {
    background: #f5f6fa;
}

.mu-checkbox-svg-icon {
	height: 16px;
    width: 16px;
}

.mu-checkbox-icon {
	height: 16px;
    width: 16px;
}

.mu-checkbox-ripple-wrapper {
	width: 40px;
    height: 30px;
    top: -5px;
}

.mu-checkbox-wrapper {
	height: 30px;
}
.mu-tr, .mu-th, .mu-td {
	height: 40px;
}

</style>
