<template>
    <div class="page-header">
          <img src="../../static/img/logo.png" alt="易企算" class="fl">
                <ul class="header-nav fr js_header_nav">
                    <li>
                        <div class="nav-dt father">
                            <i class="icon icon-message mgr-5"></i>
                            <span class="number-tag"> 0 </span>
                            <img src="../../static/img/top-arrow.png" class="top-arrow">
                            <div class="element message-down-main header-down-main">
                                <ul class="info-list01 clearfix">
                                    <li>
                                        <div>
                                            <h6>[111] 222</h6>
                                            <p class="color-999">333</p>
                                        </div>
                                    </li>
                                </ul>
                                <div class="clearfix line-height32"><a  class="fr mgr-15 fs-12">查看更多</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="nav-dt" v-if="lang === 'English'" @click="changeCn()"> English
                            <i class="icon icon-down01 mgl-5"></i>
                            <img src="../../static/img/top-arrow.png" class="top-arrow" title="$t('message.index.configNumber')">
                        </div>
                        <div class="nav-dt" v-if="lang === '中文'"  @click="changeEn()"> 简体中文
                            <i class="icon icon-down01 mgl-5"></i>
                            <img src="../../static/img/top-arrow.png" class="top-arrow" title="$t('message.index.configNumber')">
                        </div>
                    </li>
                    <li>
                        <div class="nav-dt">{{$t("message.global.help")}}</div>
                    </li>
                    <li>
                        <div class="nav-dt pdl-50" @click="jumpConfig()">{{$t("message.global.user")}}
                            <img src="../../static/img/icon-big-user.png" class="icon mgr-5 icon-user">
                            <i class="icon icon-down01 mgl-5"></i>
                        </div>
                    </li>
                </ul>
    </div>
</template>
<script>
import zh_CN from 'vee-validate/dist/locale/zh_CN'

export default {
    name: 'appNav',
    data: function () {
        return {
            lang: '中文'
        }
    },
    methods: {
        jumpConfig: function () {
            console.log(222);
        },
        changeCn: function () {
            this.lang = "中文";
            this.$i18n.locale = 'zh';
            this.$validator.localize('zh_CN', {
                messages: zh_CN.messages
            });
        },
        changeEn: function () { 
            this.lang = "English";
            this.$i18n.locale = 'en';
            this.$validator.localize('en');
        }
    }
}
</script>
<style>
.element{
   visibility: hidden;
}

.father:hover .element{
    visibility: visible;
    color: black;
}
</style>
    