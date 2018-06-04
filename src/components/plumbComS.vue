<template>
  <div class="panel-body points demo flow_chart map" id="points">
  </div>
</template>

<script>
import $ from 'jquery';
import { jsPlumb } from 'jsplumb';

require('../assets/css/demo.css');
require('../assets/css/jsplumb.css');

export default {
  name: 'plumbComT',
  data() {
    return {
      data: {
        point: [
          {
            _id: '001',
            name: 'start',
            status: '0',
          },
          {
            _id: '002',
            name: 'test1',
            status: '1',
          },
          {
            _id: '003',
            name: 'test2',
            status: '0',
          },
          {
            _id: '004',
            name: 'end',
            status: '1',
          },
        ],
        location: [
          ['test1', 4, 14],
          ['test2', 4, 24],
          ['end', 20, 24],
          ['start', 4, 4],
        ],
        line: [
          ['001', '002'],
          ['002', '003'],
          ['002', '004'],
          ['003', '004'],
        ],
      },
    };
  },
  methods: {
    createFlow(flowData) {
      console.log('Index created');
      const color = '#acd';
      const instance = jsPlumb.getInstance({
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
        for (const point of flowData.point) {
            $('.points').append(
                `<div id="${point._id}" class="point chart_act_${point.status} ${point.name}">${point.name}</div>`,
            );

            if(point._id === '001') {
                instance.addEndpoint(point._id, {
                    uuid: `${point._id}-bottom`,
                    anchor: 'Bottom',
                    maxConnections: -1,
                    connectorStyle: { stroke: 'green' },
                }, {
                    isSource: true,
                    isTarget: true,
                    dragAllowedWhenFull: true,
                });
            } else if (point._id === '004') {
                instance.addEndpoint(point._id, {
                    uuid: `${point._id}-top`,
                    anchor: 'Top',
                    maxConnections: -1,
                    connectorStyle: { stroke: 'gray' },
                }, {
                    isSource: true,
                    isTarget: true,
                    dragAllowedWhenFull: true,
                });
            } else {
                instance.addEndpoint(point._id, {
                    uuid: `${point._id}-top`,
                    anchor: 'Top',
                    maxConnections: -1,
                    connectorStyle: { stroke: 'gray' },
                }, {
                    isSource: true,
                    isTarget: true,
                    dragAllowedWhenFull: true,
                });
                instance.addEndpoint(point._id, {
                    uuid: `${point._id}-bottom`,
                    anchor: 'Bottom',
                    maxConnections: -1,
                    connectorStyle: { stroke: 'green' },
                }, {
                    isSource: true,
                    isTarget: true,
                    dragAllowedWhenFull: true,
                });
            }
        }

        // init transition
        for (const i of flowData.line) {
          const uuid = [`${i[0]}-bottom`, `${i[1]}-top`];
          instance.connect({
            uuids: uuid,
            overlays,
          });
        }

        // init location
        for (const i of flowData.location) {
          $(`.${i[0]}`).css('left', i[1] * 20);
          $(`.${i[0]}`).css('top', i[2] * 20);
        }

        for (const point of flowData.point) {
          instance.draggable(`${point._id}`);
        }
      });

      jsPlumb.fire('jsPlumbDemoLoaded', instance);
    },
  },
  mounted() {
    jsPlumb.ready(() => {
      this.createFlow(this.data);
    });
  },
};
</script>

<style>
.point.chart_act_0 {
  color: #9cc;
}
.point.chart_act_1 {
  color: #fac;
}
.map {
    margin-top: 0px;
    height: 100%;
    width: 110%;
    background: #f7f7f7 url('../../static/img/process-bg.png') 0 0;
    overflow-x: visible;
    position: fixed;
    margin-left: -20px;
}
</style>