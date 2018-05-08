<template>
  <div>
        <h1>test workspace</h1>
        <input type="text" v-model="aaa" name="name" />
        <mu-table multiSelectable enableSelectAll ref="table">
            <mu-thead>
                <mu-tr>
                    <mu-th>ID</mu-th>
                    <mu-th>text</mu-th>
                    <mu-th>title</mu-th>
                    <mu-th>Type</mu-th>
                    <mu-th>sendTime</mu-th>
                    <mu-th>status</mu-th>
                </mu-tr>
            </mu-thead>
            <mu-tbody>
                <mu-tr v-for="temp in list"  :key='temp.id'>
                    <mu-td>{{temp.messageId}}</mu-td>
                    <mu-td>{{temp.messageText}}</mu-td>
                    <mu-td>{{temp.messageTitle}}</mu-td>
                    <mu-td>{{temp.messageType}}</mu-td>
                    <mu-td>{{temp.sendTime}}</mu-td>
                    <mu-td>{{temp.status}}</mu-td>
                </mu-tr>
                
            </mu-tbody>
            <mu-tfoot slot="footer">
                <mu-tr>
                    <paginate
                        :page-count="10"
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
    </div>
</template>

<script>
//注入axio
import axios from 'axios'

export default {
    name: 'workspace',
    data: function () {
        return {
            aaa: '2222',
            list: []
        }
    },
    methods: {
        clickCallback: function(pageNum)  {
            var _this = this;
            if (pageNum == '1') {
                axios.get('../../static/data.json')
                    .then(function (response) {
                        _this.list = response.data.root.response_body;
                        console.log(_this.list);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                
            } else {
                axios.get('../../static/data1.json')
                .then(function (response) {
                    _this.list = response.data.root.response_body;
                    console.log(_this.list);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        }
    },
    created() {
        var _this = this;

        axios.get('../../static/data.json')
            .then(function (response) {
                _this.list = response.data.root.response_body;
            })
            .catch(function (error) {
                console.log(error);
            });
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

