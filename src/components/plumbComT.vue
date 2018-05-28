  <template>
    <div>
        <div class="drag-box">
            <div class="node" id="node1"  @mouseover="showPannel1 = true" @mouseleave="showPannel1 = false">
                <img src="../../static/img/new/读取器.png" class="top-arrow" title="读取器">
                <div v-show="showPannel1" class="pannerlCss">
                    <div class="Prow" @click="addFirst()" v-for="temp in toolBar.first" :key="temp.id">
                        <div class="Pleft">
                            <img :src=temp.img class="top-arrow">
                        </div> 
                        <div class="Pright">
                            <p>{{temp.text}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="node" id="node2" @mouseover="showPannel2 = true" @mouseleave="showPannel2 = false">
                <img src="../../static/img/new/-处理器-.png" class="top-arrow" title="处理器">
                <div v-show="showPannel2" class="pannerlCss">
                    <div class="LRow" v-for="temp in toolBar.second" :key="temp.groupId">
                        <div class="Lf"  @click="addSecond()">
                            <div class="Pleft">
                                <img :src=temp.left.img class="top-arrow">
                            </div> 
                            <div class="Pright">
                                <p>{{temp.left.text}}</p>
                            </div>
                        </div>
                        <div class="Lr">
                            <div class="Pleft">
                                <img :src=temp.right.img class="top-arrow">
                            </div> 
                            <div class="Pright">
                                <p>{{temp.right.text}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="node" id="node3" @mouseover="showPannel3 = true" @mouseleave="showPannel3 = false">
                <img src="../../static/img/new/写入器2.png" class="top-arrow" title="写入器">
                <div v-show="showPannel3" class="pannerlCss">
                    <div class="Prow"  @click="addThird()" v-for="temp in toolBar.third" :key="temp.id"> 
                        <div class="Pleft">
                            <img :src=temp.img class="top-arrow">
                        </div> 
                        <div class="Pright">
                            <p>{{temp.text}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="node" id="node4"  @mouseover="showPannel4 = true" @mouseleave="showPannel4 = false">
                <img src="../../static/img/new/服务.png" class="top-arrow" title="服务">
                <div v-show="showPannel4" class="pannerlCss"> 
                    <div class="Prow"  @click="addFourth()" v-for="temp in toolBar.fourth" :key="temp.id"> 
                        <div class="Pleft">
                            <img :src=temp.img class="top-arrow">
                        </div> 
                        <div class="Pright">
                            <p>{{temp.text}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="node" id="node5" @mouseover="showPannel5 = true" @mouseleave="showPannel5 = false">
                <img src="../../static/img/new/控制.png" class="top-arrow" title="控制">
                <div v-show="showPannel5" class="pannerlCss"> 
                    <div class="Prow"  @click="addFifth()" v-for="temp in toolBar.fifth" :key="temp.id"> 
                        <div class="Pleft">
                            <img :src=temp.img class="top-arrow">
                        </div> 
                        <div class="Pright">
                            <p>{{temp.text}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="diagramContainer" class="map">

            <dl class="process-operation">
                <dd>
                    <span class="process-cancle first" @click="deleteSelected()">撤销</span>
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
    </div>
</template> 

<script>
    import $ from 'jquery'

    const color = '#acd';

    export default {
        name: 'plumbComp',
        created() {
            var _this = this;

            $.getJSON('../static/toolbar.json', function(json) {
                var res = json.toolbar;
                _this.toolBar = res;
            });
        },
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
                instance: {},
                allInfos: [],
                toolBar: [],
                dragItems: [],
                dropItems: []
            }
        },
        mounted(){
            jsPlumb.ready(() => {
                this.createFlow();
            });
        },
        watch: {
            top: function (val, oldVal) {
                var _this = this,
                    jspb = _this.instance;

                if (val !== oldVal) {
                    var endpointTop = { isTarget:true};

                    jspb.addEndpoint('bottom' + _this.top, { anchor:"Left", enabled: true}, endpointTop );

                    jspb.draggable($('.point'));

                    $('#bottom' + _this.top).click(function (e) {
                        _this.deleteOther();

                        $(e.target).addClass('selected');
                    });
                }
            },
            bottom: function (val, oldVal) {
                var _this = this,
                    jspb = _this.instance;

                if (val !== oldVal) {
                    var endpointBottom = { isSource:true};

                    jspb.addEndpoint('top' + _this.bottom, { anchor:"Right", enabled: true}, endpointBottom );

                    jspb.draggable($('.point'));

                    $('#top' + _this.bottom).click(function (e) {
                        _this.deleteOther();

                        $(e.target).addClass('selected');
                    });
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

                    jspb.addEndpoints('both' + _this.both, [{ anchor:"Left", enabled: true},
                        { anchor:"Right", enabled: true}], endpoint );

                    jspb.draggable($('.point'));

                    $('#' + 'both' + _this.both).click(function (e) {
                        _this.showRightPannel = !_this.showRightPannel;

                        _this.deleteOther();

                        $(e.target).addClass('selected');
                    });
                }
            }
        },
        methods: {
            test: function () {
                this.$swal({
                    title: "Oh SUCK!",
                    text: "操作失败",
                    icon: "error",
                    button: "确定",
                });
            },
            deleteOther() {
                if (this.top > 0) {
                    for(var i = 0; i <= this.top; i++) {
                        $('#bottom' + i).removeClass('selected');
                    };
                }
                if (this.bottom > 0) {
                    for(var i = 0; i <= this.bottom; i++) {
                        $('#top' + i).removeClass('selected');
                    };
                }
                if (this.both > 0) {
                    for(var i = 0; i <= this.both; i++) {
                        $('#both' + i).removeClass('selected');
                    };
                }
            },
            createFlow() {
                this.instance = jsPlumb.getInstance({
                    Connector: 'Flowchart',
                    Endpoint: 'Dot',
                    EndpointStyle : {
                        strokeStyle : "transparent",
                        fillStyle : "transparent",
                        radius : 9,
                        lineWidth : 2
                    },
                    DragOptions: { cursor: 'pointer', zIndex: 5000 },
                    PaintStyle: { lineWidth: 5, stroke: '#445566' },
                    EndpointStyle: { radius: 9, fill: color, stroke: 'red' },
                    HoverPaintStyle: { stroke: '#ec9f2e', lineWidth: 4 },
                    EndpointHoverStyle: { fill: '#ec9f2e', stroke: '#acd' },
                    ConnectionOverlays: [
                        ['Arrow', {
                            location: 0.9,
                            id: 'arrow',
                            length: 12,
                            foldback: 1,
                            paintStyle: {
                                lineWidth: 5,
                                stroke: '#2e6f9a',
                                fill: '#2e6f9a',
                            },
                            width: 12
                        }],
                    ],
                    Container: 'points'
                });
                
                var _this = this;

                this.instance.bind("connection",function(info){
                    // console.log('连接信息', info);
                    _this.allInfos.push(info); 
                    // console.log(_this.allInfos);
                });


                // this.instance.bind("click", function (conn, originalEvent) {
                //     console.log('选中', conn);
                //     _this.instance.deleteConnection(conn);
                // });
            },
            addFirst() {
                this.bottom++;

                var id = 'top' + this.bottom,
                    template = `
                    <div id=` + id +` class='point'> 开始 </div>
                `;
                $('.map').append(template);
                $('#'+ id).css('left', 80 + this.both * 40);
                $('#'+ id).css('top', 50 + this.both * 20);

                this.allInfos.push($('#' + id)); 
            },
            addSecond() {
                this.both++;
                var id = 'both' + this.both,
                    template = `
                    <div id=` + id +` class='point'> 过程 </div>
                `;
                $('.map').append(template);
                                
                $('#'+ id).css('left', 80 + this.both * 20);
                $('#'+ id).css('top', 100 + this.both * 20);

                this.allInfos.push($('#' + id)); 
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
                
                $('#'+ id).css('left', 100 + this.top * 20);
                $('#'+ id).css('top', 200 + this.top * 20);

                this.allInfos.push($('#' + id));
            },
            getAllConnection() {
                var list = this.instance.getAllConnections();//获取所有的链接
                console.log('所有连接', list);
            },
            deleteSelected() {
                if (_.isObject(this.allInfos.length - 1)) {
                    this.instance.deleteConnection(this.allInfos[this.allInfos.length - 1]);
                } else {
                    this.instance.remove(this.allInfos[this.allInfos.length - 1]);
                }
                this.allInfos.pop();
            }
        }
    }
</script> 
<style scope>

.testArea {
    height: 800px;
    width: 100%;
}

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
    z-index: 25;
}

.drag-box {
    width: 60px;
    background: white;
    top: 60px;
    z-index: 25;
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
.Lf {
    width: 48%;
    float: left;
}
.Lr {
    width: 46%;
    float: left;
    margin-left: 10px;
}

.Lf {
    border-right: 1px solid gray;
}

.point{
    width: 50px;
    height: 40px;
    border: 2px solid #2e6f9a;
    border-radius: 8px;
    position: absolute;
    z-index: 25;
    background: url('../../static/img/new/二进制文件阅读器.png') no-repeat 10px center;
}

.point.selected {
    border: 2px solid orange;
}

.Pright>p {
    margin-left: 10px;
}

</style>