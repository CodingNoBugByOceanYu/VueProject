<template>
  <div :style="{ 'display': 'flex', 'justifyContent': 'stretch', 'marginTop': '50px', 'marginRight': '50px' }">
			<div :style="{'marginLeft': '50px', 'flex': '1'}">
				<Container :behaviour="'copy'" :group-name="'1'" :get-child-payload="getChildPayload1">
					<Draggable v-for="item in items1" :key="item.id">
						<div class="draggable-item">
							{{item.data}}
						</div>
					</Draggable>
				</Container>
			</div>
			<div :style="{'marginLeft': '50px', 'flex': '1'}">
				<Container :group-name="'1'" :get-child-payload="getChildPayload2" @drop="onDrop('items2', $event)">
					<div v-for="item in items2" :key="item.id">
						<div class="point" v-drag>
							{{item.data}}
						</div>
					</div>
				</Container>
			</div>
  </div>
</template>

<script>

import { Container, Draggable } from "vue-smooth-dnd";
import { applyDrag, generateItems } from "./utils";

export default {
  name: "Copy",
  components: { Container, Draggable },

  data: function() {
    return {
      items1: generateItems(15, i => ({
        id: "1" + i,
        data: `Source Draggable - ${i}`
      })),
      items2: [{
        id: "2",
        data: `54st`
      }]
    };
  },
  methods: {
    onDrop: function(collection, dropResult) {
      this[collection] = applyDrag(this[collection], dropResult);
    },
    getChildPayload1: function(index) {
      return this.items1[index];
    },
    getChildPayload2: function(index) {
      return this.items2[index];
    }
  }
};
</script>
<style>
.smooth-dnd-container * {
    box-sizing: border-box;
}

.draggable-item, .draggable-item-horizontal {
    text-align: center;
    display: block;
    background-color: #fff;
    outline: 0;
    border: 1px solid rgba(0,0,0,.125);
}

.draggable-item {
    height: 50px;
    line-height: 50px;
    width: 100%;
    margin-bottom: 2px;
    margin-top: 2px;
}

.point{
    width: 50px;
    height: 40px;
    border: 2px solid #2e6f9a;
    border-radius: 8px;
    position: absolute;
    z-index: 25;
    background: url('../../static/img/new/BinaryFileReader.png') no-repeat 10px center;
}
</style>