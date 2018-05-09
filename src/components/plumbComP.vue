  <template>
    <div id="diagramContainer">
        <Progress :percent="percent" status="active" v-show="!hideProgress"></Progress>
        <div class="addOpes">
            <button @click="addAope()" class="btn btn-green"> 添加一个 </button>
        </div>

        <div id="item_left" class="item" style="top:100px;"></div>
        <div id="item_right" class="item" style="top:150px; left:200px;"></div>

        <div style="margin-left: 85%;">
            <div class="tempClass" v-show="firstArray.length > 0" v-for="temp in firstArray" :key="temp.id">
                <h5>{{temp.title}}</h5>
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
                percent: 10,
                firstArray: [],
                hideProgress: false
            }
        },
        methods: {
            addAope: function () {
                var temp = {
                    id: 0,
                    title: 'module',
                    params: {

                    }
                };
                this.counter += 1;
                temp.id = this.counter;
                temp.title = temp.title + this.counter;

                this.firstArray.push(temp)

            },

            createFlow(flowData) {
                const color = '#acd';
                const instance = jsPlumb.getInstance({
                    Connector: 'Flowchart',
                    // Endpoint: ['Dot', { radius: 5 }],
                    DragOptions: { cursor: 'pointer', zIndex: 5000 },
                    PaintStyle: { lineWidth: 5, stroke: '#445566' },
                    EndpointStyle: { radius: 9, fill: color, stroke: 'red' },
                    HoverPaintStyle: { stroke: '#ec9f2e', lineWidth: 4 },
                    // EndpointHoverStyle: { fill: '#ec9f2e', stroke: '#acd' },
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
                        }],
                    ],
                    Container: 'points',
                });

                // suspend drawing and initialise.
                instance.batch(() => {
                    // declare some common values:
                    const arrowCommon = { foldback: 0.7, width: 12 };
                    // use three-arg spec to create two different arrows with the common values:
                    const overlays = [
                        ['Arrow', { location: 0.7 }, arrowCommon],
                        ['Label', { label: '链接说明', id: 'label' }],
                    ];
                    // init point
                    instance.addEndpoint('item_left', {
                        uuid: '0001',
                        anchor: 'Bottom',
                        maxConnections: -1
                    }, {
                        isSource: true,
                        dragAllowedWhenFull: true,
                    });
                    instance.addEndpoint('item_right', {
                        uuid: '0002',
                        anchor: 'Top',
                        maxConnections: -1
                    }, {
                        isTarget: true,
                        dragAllowedWhenFull: true,
                    });

                    instance.connect({
                        source: 'item_left',
                        target: 'item_right',
                        overlays,
                    });

                    instance.draggable($('.item'));

                });

                jsPlumb.fire('jsPlumbDemoLoaded', instance);
            },
        },
        mounted() {
            jsPlumb.ready(() => {
                this.createFlow(this.data);
            });

            setInterval(() => {
                if (this.percent !== 100) {
                    this.percent += 10;
                } else {
                    this.hideProgress = true;
                }
            }, 100);
            
        }
    }
</script> 
<style>

.item {
    height: 150px;
    width: 80px;
    border: 1px solid #ccc4c4;
    border-radius: 10px;
    position:absolute;
}

#item_left {
    background: red; 
}

#item_right {
    background:green; 
}

#a111, #a222 {
    background:blue; 
}

.tempClass {
    height: 50px;
    width: 100px;
    line-height: 50px;
    background: #c5bcbc;
    border: 1px solid gray;
    border-radius: 10px;
}
</style>