  <template>
    <div id="diagramContainer">
        <div id="left">
                <div class="node radius" id="node1">开始</div>
                <div class="node" id="node2">流程</div>
                <div class="node" id="node3">判断</div>
                <div class="node radius" id="node4">结束</div>
            <!-- <draggable @start="drag=true" @end="drag=false">
            </draggable> -->
        </div>     
        
        <div id="right">
                <p>拖拉到此区域</p>
                <div id="a333" class="item" style="margin-top:400px; margin-left:400px;"></div>
                <div id="a444" class="item" style="margin-top:500px; margin-left:300px;"></div>
            <!-- <draggable @start="drag=true" @end="drag=true">
            </draggable> -->
        </div>
        <div id="save">
            <input type="button" value="保存" onclick="save()" />
        </div>
    </div>
</template> 

<script>
    import $ from 'jquery'
    // import draggable from 'vuedraggable'
    export default {
        name: 'plumbComp',
        data: function () {
            return {
                counter: 0,
                firstArray: []
            }
        },
        // components: {
        //     draggable,
        // },
        mounted(){
            jsPlumb.ready(function() {
                var jsPlumbInstance = jsPlumb.getInstance(),
                    els = document.querySelectorAll(".node");

                jsPlumbInstance.draggable(els);

                var endpointOptions = { isSource:true};
                var endpointOptione = { isTarget:true };

                var window3Endpoint = jsPlumb.addEndpoint('a333', { anchor:"Top" }, endpointOptions ); 
                var window4Endpoint = jsPlumb.addEndpoint('a444', { anchor:"BottomCenter" }, endpointOptione ); 

                jsPlumb.connect({ 
                    source:window3Endpoint,
                    target:window4Endpoint,
                    connector: 'Flowchart',
                    overlays: [
                            [ "Arrow", { foldback:0.5 }]
                        ]
                });
                
            })
        },
        watch: {
            firstArray: function (val, oldVal) {
                console.log(val, oldVal)
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

            }
        }
    }
</script> 
<style>
#diagramContainer {
    height: 1000px;
    width: 100%;
}

#left {
    height: 80%;
    width:  20%;
    background:  #ffffff;
    border:  1px solid gray;
    float: left;
}
#right {
    height: 80%;
    width:  60%;
    background:  #ffffff;
    border:  1px solid gray;
    float: left;
}
.node {
    box-shadow: 2px 2px 19px #aaa;
    -o-box-shadow: 2px 2px 19px #aaa;
    -webkit-box-shadow: 2px 2px 19px #aaa;
    -moz-box-shadow: 2px 2px 19px #aaa;
    -moz-border-radius: 0.5em;
    border-radius: 0.5em;
    opacity: 0.8;
    filter: alpha(opacity=80);
    border: 1px solid #346789;
    width: 150px;
    /*line-height: 40px;*/
    text-align: center;
    background-color: #eeeeef;
    color: black;
    padding: 10px;
    font-size: 9pt;
    cursor: pointer;
    height: 50px;
    line-height: 50px;
    margin-top: 50px;
}
.radius {
    border-radius: 25em;
}
.node:hover {
    box-shadow: 2px 2px 19px #444;
    -o-box-shadow: 2px 2px 19px #444;
    -webkit-box-shadow: 2px 2px 19px #444;
    -moz-box-shadow: 2px 2px 19px #444;
    opacity: 0.8;
    filter: alpha(opacity=80);
}
</style>