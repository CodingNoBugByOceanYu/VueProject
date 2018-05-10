  <template>
    <div id="diagramContainer" class="map">
        <div class="drag-box">
            <div class="node" id="node1">
                <img src="../../static/img/new/读取器.png" class="top-arrow">
            </div>
            <div class="node" id="node2"><img src="../../static/img/new/-处理器-.png" class="top-arrow"></div>
            <div class="node" id="node3"><img src="../../static/img/new/写入器2.png" class="top-arrow"></div>
            <div class="node" id="node4"><img src="../../static/img/new/服务.png" class="top-arrow"></div>
            <div class="node" id="node4"><img src="../../static/img/new/控制.png" class="top-arrow"></div>
        </div>     

        <div id="a333" class="item" style="margin-top:200px; margin-left:400px;"></div>
        <div id="a444" class="item" style="margin-top:300px; margin-left:300px;"></div>

        <dl class="process-operation">
            <dd>
                <span class="process-cancle first" ng-click="deleteSelected()">撤销</span>
            </dd>
            <dd><span class="process-checkIn" >检入</span></dd>
            <dd><span class="process-test" >仿真测试</span></dd>
            <dd><span class="process-save" >保存设计</span></dd>
        </dl>
        <div class="releaseArea">
            <a class="process-release"></a>  
        </div>

        <div class="save">
            <div class="operaDiv">
                <p>编码</p>
                <div>
                    <input class="input" placeholder="请输入编码" />
                </div>
            </div>
            <div class="operaDiv">
                <p>名称</p>
                <div>
                    <input class="input" placeholder="请输入名称" />
                </div>
            </div>
            <div class="operaDiv">
                <p>描述</p>
                <div>
                    <textarea class="textarea"> </textarea>
                </div>
            </div>
        </div>
    </div>
</template> 

<script>
    import $ from 'jquery'
    export default {
        name: 'plumbComp',
        data: function () {
            return {
                counter: 0,
                firstArray: []
            }
        },
        mounted(){
            jsPlumb.ready(function() {
                var endpointOptions = { isSource:true};
                var endpointOptione = { isTarget:true };

                var window3Endpoint = jsPlumb.addEndpoint('a333', { anchor:"Top" }, endpointOptions );
                var window4Endpoint = jsPlumb.addEndpoint('a444', { anchor:"Top" }, endpointOptione );

                jsPlumb.connect({
                    source:window3Endpoint,
                    target:window4Endpoint,
                    connector: 'Flowchart',
                    overlays: [
                            [ "Arrow", { foldback:0.5 }]
                        ]
                });

                jsPlumb.draggable($('.item'));
            })
        },
        watch: {
        },
        methods: {
        }
    }
</script> 
<style scope>
.map {
    height: 100%;
    width: 110%;
    background: #f7f7f7 url('../../static/img/process-bg.png') 0 0;
    overflow-x: visible;
    position: fixed;
    margin-left: -20px;
}
.item {
    height: 150px;
    width: 80px;
    border: 3px solid #ccc4c4;
    border-radius: 10px;
    position:absolute;
}

.save {
    margin-top: 6%;
    overflow-y: auto;
    right: 0px;
    width: 240px;
    height: 86%;
    background: #fff;
    position: fixed;
    font-size: 14px;
}

.drag-box {
    width: 60px;
    background: white;
}
.node:first-child {
    margin-top: 5px;
}
.node {
    margin-top: 20px;
    margin-left: 12px
}
.input:hover, .textarea:hover {
    background-color: #fff;
}

.input, .textarea {
    -moz-appearance: none;
    -webkit-appearance: none;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-color: #b5b5b5;
    border: 1px solid #34e661;
    border-radius: 3px;
    color: #363636;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-size: 12px;
    height: 32px;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    line-height: 24px;
    padding-left: 8px;
    padding-right: 8px;
    position: relative;
    vertical-align: top;
    box-shadow: inset 0 1px 2px hsla(0,0%,4%,.1);
    max-width: 100%;
    width: 180px;
}

.operaDiv:first-child {
    margin-top: 20%;
}
.operaDiv {
    margin-left: 25px;
    margin-top: 10%;
}

.process-operation {
    right: 70px;
}

.process-operation dd span.process-cancle {
    background: url('../../static/img/new/形状-10-拷贝.png') no-repeat 10px center;
}
.process-operation dd span.process-checkIn {
    background: url('../../static/img/new/形状-2.png') no-repeat 10px center;
}
.process-operation dd span.process-test {
    background: url('../../static/img/new/测试-(1).png') no-repeat 10px center;
}

.releaseArea {
    width: 36px;
    background: white;
    right: 20px;
    position: fixed;
    top: 115px;
}
.process-release {
    display:block;
    height: 36px;
    width: 19px;
    margin-left: 7px;
    background-image:url('../../static/img/new/发布-(2).png');
    background-repeat: no-repeat;
    background-position:50% 50%;
}
</style>