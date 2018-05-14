  <template>
    <div id="diagramContainer" class="map">
        <div class="drag-box">
            <div class="node" id="node1"  @mouseover="showPannel1 = true" @mouseleave="showPannel1 = false">
                <img src="../../static/img/new/读取器.png" class="top-arrow">
                <div v-show="showPannel1" class="pannerlCss"> 
                    <div class="Prow" @click="addFirst()"> 
                        <div class="Pleft">
                            <img src="../../static/img/new/二进制文件阅读器.png" class="top-arrow">
                        </div> 
                        <div class="Pright">
                            <p>二进制文件阅读器</p>
                        </div>
                    </div>
                    <div class="Prow" > 
                        <div class="Pleft">
                            <img src="../../static/img/new/excel读取器.png" class="top-arrow">
                        </div> 
                        <div class="Pright">
                            <p>excel读取器</p>
                        </div>
                    </div>
                    <div class="Prow"> 
                        <div class="Pleft">
                            <img src="../../static/img/new/文件轮寻器.png" class="top-arrow">
                        </div> 
                        <div class="Pright">
                            <p>文件轮寻器</p>
                        </div>
                    </div>
                    <div class="Prow"> 
                        <div class="Pleft">
                            <img src="../../static/img/new/读取数据库.png" class="top-arrow">
                        </div> 
                        <div class="Pright">
                            <p>读取数据库</p>
                        </div>
                    </div>
                    <div class="Prow"> 
                        <div class="Pleft">
                            <img src="../../static/img/new/文本常量.png" class="top-arrow">
                        </div> 
                        <div class="Pright">
                            <p>文本常量</p>
                        </div>
                    </div>
                    <div class="Prow"> 
                        <div class="Pleft">
                            <img src="../../static/img/new/文本读取.png" class="top-arrow">
                        </div> 
                        <div class="Pright">
                            <p>文本读取</p>
                        </div>
                    </div>
                    <div class="Prow"> 
                        <div class="Pleft">
                            <img src="../../static/img/new/Unzip解压器.png" class="top-arrow">
                        </div> 
                        <div class="Pright">
                            <p>Unzip解压器</p>
                        </div>
                    </div>
                    <div class="Prow"> 
                        <div class="Pleft">
                            <img src="../../static/img/new/XML读取.png" class="top-arrow">
                        </div> 
                        <div class="Pright">
                            <p>XML读取</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="node" id="node2" @mouseover="showPannel2 = true" @mouseleave="showPannel2 = false">
                <img src="../../static/img/new/-处理器-.png" class="top-arrow">
                <div v-show="showPannel2" class="pannerlCss">
                    <div class="LRow">
                        <div class="Lf"  @click="addSecond()">
                            <div class="Pleft">
                                <img src="../../static/img/new/Assert断言.png" class="top-arrow">
                            </div> 
                            <div class="Pright">
                                <p>Assert断言</p>
                            </div>
                        </div>
                        <div class="Lr">
                            <div class="Pleft">
                                <img src="../../static/img/new/子流程嵌入.png" class="top-arrow">
                            </div> 
                            <div class="Pright">
                                <p>子流程嵌入</p>
                            </div>
                        </div>
                    </div>
                    <div class="LRow">
                        <div class="Lf">
                            <div class="Pleft">
                                <img src="../../static/img/new/内容路由器.png" class="top-arrow">
                            </div> 
                            <div class="Pright">
                                <p>内容路由器</p>
                            </div>
                        </div>
                        <div class="Lr">
                            <div class="Pleft">
                                <img src="../../static/img/new/重复数据去除.png" class="top-arrow">
                            </div> 
                            <div class="Pright">
                                <p>重复数据去除</p>
                            </div>
                        </div>
                    </div>
                    <div class="LRow">
                        <div class="Lf">
                            <div class="Pleft">
                                <img src="../../static/img/new/延迟.png" class="top-arrow">
                            </div> 
                            <div class="Pright">
                                <p>延迟</p>
                            </div>
                        </div>
                        <div class="Lr">
                            <div class="Pleft">
                                <img src="../../static/img/new/反序列化器.png" class="top-arrow">
                            </div> 
                            <div class="Pright">
                                <p>反序列化器</p>
                            </div>
                        </div>
                    </div>
                    <div class="LRow">
                        <div class="Lf">
                            <div class="Pleft">
                                <img src="../../static/img/new/执行.png" class="top-arrow">
                            </div> 
                            <div class="Pright">
                                <p>执行</p>
                            </div>
                        </div>
                        <div class="Lr">
                            <div class="Pleft">
                                <img src="../../static/img/new/文件操作.png" class="top-arrow">
                            </div> 
                            <div class="Pright">
                                <p>文件操作</p>
                            </div>
                        </div>
                    </div>
                    <div class="LRow">
                        <div class="Lf">
                            <div class="Pleft">
                                <img src="../../static/img/new/分隔符格式化.png" class="top-arrow">
                            </div> 
                            <div class="Pright">
                                <p>分隔符格式化</p>
                            </div>
                        </div>
                        <div class="Lr">
                            <div class="Pleft">
                                <img src="../../static/img/new/固定格式化.png" class="top-arrow">
                            </div> 
                            <div class="Pright">
                                <p>固定格式化</p>
                            </div>
                        </div>
                    </div>
                    <div class="LRow">
                        <div class="Lf">
                            <div class="Pleft">
                                <img src="../../static/img/new/XML读取-副本.png" class="top-arrow">
                            </div> 
                            <div class="Pright">
                                <p>XML文件格式化</p>
                            </div>
                        </div>
                        <div class="Lr">
                            <div class="Pleft">
                                <img src="../../static/img/new/检索.png" class="top-arrow">
                            </div> 
                            <div class="Pright">
                                <p>检索</p>
                            </div>
                        </div>
                    </div>
                    <div class="LRow">
                        <div class="Lf">
                            <div class="Pleft">
                                <img src="../../static/img/new/映射.png" class="top-arrow">
                            </div> 
                            <div class="Pright">
                                <p>映射</p>
                            </div>
                        </div>
                        <div class="Lr">
                            <div class="Pleft">
                                <img src="../../static/img/new/合并.png" class="top-arrow">
                            </div> 
                            <div class="Pright">
                                <p>合并</p>
                            </div>
                        </div>
                    </div>
                    <div class="LRow">
                        <div class="Lf">
                            <div class="Pleft">
                                <img src="../../static/img/new/消息日志记录器.png" class="top-arrow">
                            </div> 
                            <div class="Pright">
                                <p>消息日志记录器</p>
                            </div>
                        </div>
                        <div class="Lr">
                            <div class="Pleft">
                                <img src="../../static/img/new/数据模型比较器.png" class="top-arrow">
                            </div> 
                            <div class="Pright">
                                <p>数据模型比较器</p>
                            </div>
                        </div>
                    </div>
                    <div class="LRow">
                        <div class="Lf">
                            <div class="Pleft">
                                <img src="../../static/img/new/倍增器.png" class="top-arrow">
                            </div> 
                            <div class="Pright">
                                <p>倍增器</p>
                            </div>
                        </div>
                        <div class="Lr">
                            <div class="Pleft">
                                <img src="../../static/img/new/无操作.png" class="top-arrow">
                            </div> 
                            <div class="Pright">
                                <p>无操作</p>
                            </div>
                        </div>
                    </div>
                    <div class="LRow">
                        <div class="Lf">
                            <div class="Pleft">
                                <img src="../../static/img/new/格式化解析器.png" class="top-arrow">
                            </div> 
                            <div class="Pright">
                                <p>格式化解析器</p>
                            </div>
                        </div>
                        <div class="Lr">
                            <div class="Pleft">
                                <img src="../../static/img/new/脚本.png" class="top-arrow">
                            </div> 
                            <div class="Pright">
                                <p>脚本</p>
                            </div>
                        </div>
                    </div>
                    <div class="LRow">
                        <div class="Lf">
                            <div class="Pleft">
                                <img src="../../static/img/new/XML解析器.png" class="top-arrow">
                            </div> 
                            <div class="Pright">
                                <p>XML解析器</p>
                            </div>
                        </div>
                        <div class="Lr">
                            <div class="Pleft">
                                <img src="../../static/img/new/序列化.png" class="top-arrow">
                            </div> 
                            <div class="Pright">
                                <p>序列化</p>
                            </div>
                        </div>
                    </div>
                    <div class="LRow">
                        <div class="Lf">
                            <div class="Pleft">
                                <img src="../../static/img/new/排序器.png" class="top-arrow">
                            </div> 
                            <div class="Pright">
                                <p>排序器</p>
                            </div>
                        </div>
                        <div class="Lr">
                            <div class="Pleft">
                                <img src="../../static/img/new/顺序化.png" class="top-arrow">
                            </div> 
                            <div class="Pright">
                                <p>顺序化</p>
                            </div>
                        </div>
                    </div>
                    <div class="LRow">
                        <div class="Lf">
                            <div class="Pleft">
                                <img src="../../static/img/new/暂存RDBMS.png" class="top-arrow">
                            </div> 
                            <div class="Pright">
                                <p>暂存RDBMS</p>
                            </div>
                        </div>
                        <div class="Lr">
                            <div class="Pleft">
                                <img src="../../static/img/new/文本替换.png" class="top-arrow">
                            </div> 
                            <div class="Pright">
                                <p>文本替换</p>
                            </div>
                        </div>
                    </div>
                    <div class="LRow">
                        <div class="Lf">
                            <div class="Pleft">
                                <img src="../../static/img/new/转换器.png" class="top-arrow">
                            </div> 
                            <div class="Pright">
                                <p>转换器</p>
                            </div>
                        </div>
                        <div class="Lr">
                            <div class="Pleft">
                                <img src="../../static/img/new/联合器.png" class="top-arrow">
                            </div> 
                            <div class="Pright">
                                <p>联合器</p>
                            </div>
                        </div>
                    </div>
                    <div class="LRow">
                        <div class="Lf">
                            <div class="Pleft">
                                <img src="../../static/img/new/web请求.png" class="top-arrow">
                            </div> 
                            <div class="Pright">
                                <p>web请求</p>
                            </div>
                        </div>
                        <div class="Lr">
                            <div class="Pleft">
                                <img src="../../static/img/new/XSLT处理器.png" class="top-arrow">
                            </div> 
                            <div class="Pright">
                                <p>XSLT处理器</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="node" id="node3" @mouseover="showPannel3 = true" @mouseleave="showPannel3 = false">
                <img src="../../static/img/new/写入器2.png" class="top-arrow">
                <div v-show="showPannel3" class="pannerlCss"> 
                    <div class="Prow"  @click="addThird()"> 
                        <div class="Pleft">
                            <img src="../../static/img/new/二进制文件写入器.png" class="top-arrow">
                        </div> 
                        <div class="Pright">
                            <p>二进制文件写入器</p>
                        </div>
                    </div>
                    <div class="Prow"> 
                        <div class="Pleft">
                            <img src="../../static/img/new/excel文件写入器.png" class="top-arrow">
                        </div> 
                        <div class="Pright">
                            <p>excel文件写入器</p>
                        </div>
                    </div>
                    <div class="Prow"> 
                        <div class="Pleft">
                            <img src="../../static/img/new/电子邮件写入器.png" class="top-arrow">
                        </div> 
                        <div class="Pright">
                            <p>电子邮件写入器</p>
                        </div>
                    </div>
                    <div class="Prow"> 
                        <div class="Pleft">
                            <img src="../../static/img/new/读取数据库.png" class="top-arrow">
                        </div> 
                        <div class="Pright">
                            <p>读取数据库</p>
                        </div>
                    </div>
                    <div class="Prow"> 
                        <div class="Pleft">
                            <img src="../../static/img/new/SQL执行器.png" class="top-arrow">
                        </div> 
                        <div class="Pright">
                            <p>SQL执行器</p>
                        </div>
                    </div>
                    <div class="Prow"> 
                        <div class="Pleft">
                            <img src="../../static/img/new/文本写入器.png" class="top-arrow">
                        </div> 
                        <div class="Pright">
                            <p>文本写入器</p>
                        </div>
                    </div>
                    <div class="Prow"> 
                        <div class="Pleft">
                            <img src="../../static/img/new/数据压缩器.png" class="top-arrow">
                        </div> 
                        <div class="Pright">
                            <p>数据压缩器</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="node" id="node4"  @mouseover="showPannel4 = true" @mouseleave="showPannel4 = false">
                <img src="../../static/img/new/服务.png" class="top-arrow" >
                <div v-show="showPannel4" class="pannerlCss"> 
                    <div class="Prow"  @click="addFourth()"> 
                        <div class="Pleft">
                            <img src="../../static/img/new/HTTP请求.png" class="top-arrow">
                        </div> 
                        <div class="Pright">
                            <p>HTTP请求</p>
                        </div>
                    </div>
                    <div class="Prow"> 
                        <div class="Pleft">
                            <img src="../../static/img/new/HTTP响应.png" class="top-arrow">
                        </div> 
                        <div class="Pright">
                            <p>HTTP响应</p>
                        </div>
                    </div>
                    <div class="Prow"> 
                        <div class="Pleft">
                            <img src="../../static/img/new/消息订阅.png" class="top-arrow">
                        </div> 
                        <div class="Pright">
                            <p>消息订阅</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="node" id="node5" @mouseover="showPannel5 = true" @mouseleave="showPannel5 = false">
                <img src="../../static/img/new/控制.png" class="top-arrow">
                <div v-show="showPannel5" class="pannerlCss"> 
                    <div class="Prow"  @click="addFifth()"> 
                        <div class="Pleft">
                            <img src="../../static/img/new/闸门.png" class="top-arrow">
                        </div> 
                        <div class="Pright">
                            <p>闸门</p>
                        </div>
                    </div>
                    <div class="Prow"> 
                        <div class="Pleft">
                            <img src="../../static/img/new/截止器.png" class="top-arrow">
                        </div> 
                        <div class="Pright">
                            <p>截止器</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>     

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

        <div class="save" v-show="showRightPannel">
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
            <div class="operaDiv">
                <button class="btn btn-green" @click="getAllConnection()"> 获取连接 </button>
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
                showPannel1: false,
                showPannel2: false,
                showPannel3: false,
                showPannel4: false,
                showPannel5: false,
                showRightPannel: false,
                top: 0,
                bottom: 0,
                both: 0,
                instance: {}
            }
        },
        mounted(){
            const color = '#acd';

            jsPlumb.ready(() => {
                jsPlumb.importDefaults({  
                    Connector: 'Flowchart',
                    Endpoint: ['Dot', { radius: 5 }],
                    DragOptions: { cursor: 'pointer', zIndex: 5000 },
                    PaintStyle: { lineWidth: 5, stroke: '#445566' },
                    EndpointStyle: { radius: 9, fill: color, stroke: 'red' },
                    HoverPaintStyle: { stroke: '#ec9f2e', lineWidth: 4 },
                    EndpointHoverStyle: { fill: '#ec9f2e', stroke: '#acd' },
                    ConnectionOverlays: [
                        ['Arrow', {
                            location: 1,
                            id: 'arrow',
                            length: 4,
                            foldback: 0.8,
                            paintStyle: {
                                lineWidth: 5,
                                stroke: 'lightgray',
                                fill: 'lightgray',
                            },
                            width: 20
                        }],
                    ],
                    Container: 'points'
                })

                this.createFlow();
            });
        },
        watch: {
            top: function (val, oldVal) {
                var _this = this,
                    jspb = _this.instance;

                if (val !== oldVal) {
                    var endpointTop = { isTarget:true};

                    jspb.addEndpoint('bottom' + _this.top, { anchor:"Top", enabled: true}, endpointTop );

                    jspb.draggable($('.point'));
                }
            },
            bottom: function (val, oldVal) {
                var _this = this,
                    jspb = _this.instance;

                if (val !== oldVal) {
                    var endpointBottom = { isSource:true};

                    jspb.addEndpoint('top' + _this.bottom, { anchor:"Bottom", enabled: true}, endpointBottom );

                    jspb.draggable($('.point'));
                }
            },
            both: function (val, oldVal) {
                var _this = this,
                    jspb = _this.instance;

                if (val !== oldVal) {
                    var endpoint = {
                        isTarget:true,
                        isSource:true
                    };

                    jspb.addEndpoints('both' + _this.both, [{ anchor:"Top", enabled: true},
                        { anchor:"Bottom", enabled: true}], endpoint );

                    jspb.draggable($('.point'));

                    $('#' + 'both' + _this.both).click(function () {
                        _this.showRightPannel = !_this.showRightPannel;
                    });
                }
            }
        },
        methods: {
            createFlow() {
                this.instance = jsPlumb.getInstance();
            },
            addFirst() {
                this.bottom++;

                var id = 'top' + this.bottom,
                    template = `
                    <div id=` + id +` class='point'> 开始 </div>
                `;
                $('.map').append(template);
                $('#'+ id).css('margin-left', 80 + this.both * 40);
                $('#'+ id).css('margin-top', 50 + this.both * 20);
            },
            addSecond() {
                this.both++;
                var id = 'both' + this.both,
                    template = `
                    <div id=` + id +` class='point'> 过程 </div>
                `;
                $('.map').append(template);
                                
                $('#'+ id).css('margin-left', 80 + this.both * 20);
                $('#'+ id).css('margin-top', 100 + this.both * 20);
                this.count++;
            },
            addThird() {
                this.addSecond();
            },
            addFourth() {
                this.addSecond();
            },
            addFifth() {
                this.top++;

                var id = 'bottom' + this.top,
                    template = `
                    <div id=` + id +` class='point'> 结束 </div>
                `;
                $('.map').append(template);
                
                $('#'+ id).css('margin-left', 100 + this.top * 20);
                $('#'+ id).css('margin-top', 200 + this.top * 20);
            },
            getAllConnection() {
                var list = this.instance.getAllConnections();//获取所有的链接
                console.log('所有连接', list);
            }
        }
    }
</script> 
<style scope>
#diagramContainer {
    overflow-y: auto;
}

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
    top: 60px;
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

.pannerlCss {
    margin-left: 55px;
    z-index: 80;
    position: fixed;
    width: 160px;
    background: white;
    margin-top: -45px;
}
.Pleft {
    margin-top: 5px;
    width: 10%;
    float: left;
}

.Pright {
    margin-left: 5%;
    width: 85%;
    float: left;
}
.Prow {
    width: 100%;
    height: 45px;
    line-height: 33px;
}
.Prow:hover {
    cursor: pointer;
    background: #f5f6fa;
}

.LRow {
    width: 320px;
    height: 55px;
    line-height: 50px;
    background: white;
}
.Lf:hover, .Lr:hover {
    cursor: pointer;
    background: #f5f6fa;
}
.Lf,
.Lr {
    width: 50%;
    float: left;
}

.Lf {
    border-right: 1px solid gray;
}

.point{
    height: 80px;
    width: 100px;
    border: 3px solid #ccc4c4;
    border-radius: 5px;
    position:absolute;
    background: url('../../static/img/new/二进制文件阅读器.png') no-repeat 10px center;
}


</style>