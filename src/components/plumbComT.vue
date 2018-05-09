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

        <div class="save">
            <input type="button" value="保存" onclick="save()" />
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
    overflow-y: auto;
    right: 0px;
    width: 200px;
    height: 100%;
    background: #fff;
    position: fixed;
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

</style>