<template>
  <div>
    <div class="prePage">
        <img class="preload" style="position:absolute;left:38%;top:30%">
    </div>
    <div class="relPage" style="display:none">
        <div id="app">
            <div v-if="loading" class="shadow loading-box">
                <div class="loading">
                    <img class="getload">
                    <span>正在使用洪荒之力中...</span>
                </div>
            </div>
            <app-nav></app-nav>
            <side-menu></side-menu>
            <vue-tabs></vue-tabs>
        </div>
    </div>
  </div>
</template>
<script>
import appNav from '@/components/banner'
import sideMenu from '@/components/sideMenu'
import $ from 'jquery'
import preloading from '../static/img/loading/prePage.gif';
import ies from '../static/img/loading/ies.gif';

import '../static/css/layoutIndex.less'
import '../static/css/basic.less'
import '../static/css/component.less'
import '../static/css/compose.less'
import '../static/css/reset.less'
import '../static/css/table.less'

export default {
    name: 'app',
    components: {
      appNav,
      sideMenu
    },
    data: function () {
      return {
        loading: false
      }
    },
    mounted() {
      $('.preload').attr('src', preloading);
      $('.getload').attr('src', ies);

      setTimeout(() => {
        $(".prePage").remove();
        $(".relPage").show();
      }, 800);
    }
}
</script>
<style>
  .vue-tabs {
    top: 50px;
    margin-left: 200px;
  }
  .swal-modal {
    width: 385px;
  }
  .swal-title {
    font-size: 24px;
  }
  .swal-button {
    background-color: #1c9ad5;
  }
</style>
