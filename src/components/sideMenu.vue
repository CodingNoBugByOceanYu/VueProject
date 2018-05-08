<template>
<nav class="side-menu">
    <div>
        <div class="nav js_nav auto-height">
            <div class="topMenu">
                <div class="menuTab"
                    v-for="tm in topMenu" :key='tm.id'
                    :class="{ active: tm.show }" 
                    @click="toggleSubmenu(tm, topMenu)">{{$t(tm.name)}}</div>
            </div>
            <div v-for="tm in topMenu" :key='tm.id' v-if="tm.show">
                <div class="search-pannel">
                    <input type="text" style="color:#999"  :placeholder="$t('tip.menuTip')" class="ipt-click js_ipt_click">
                    <button class="btn">{{$t('message.op.type.QUERY')}}</button>
                </div>
                <div v-for="menu in tm.menus" :key='menu.menuId' class="js_nav_box">
                    <dl>
                        <dt @click="toggleSubmenu(menu, tm.menus)" class="js_nav_1 fullWidth">
                            <p class="fl" style="width: 80px;"> {{$t(menu.translate)}}</p>
                            <div class="fl" style="margin-left: 35px;">
                                <a title="修改" ><img src="../../static/img/new/修改.png"/></a>
                                <a title="删除" ><img src="../../static/img/new/删除.png"/></a>
                                <a title="新增系统" ><img src="../../static/img/new/新增系统.png"/></a>
                            </div>
                        </dt>
                        <div v-show="menu.show" :class="{'active': selected === submenu.menuId}" v-for="submenu in menu.submenu"  :key='submenu.menuId' @click.stop="clickMenuItem(submenu, menu.submenu)">
                            <div class="fullWidth son">
                                <p class="fl sonL ml20"> {{$t(submenu.translate)}}</p>
                                <div class="fr sonR">
                                    <a class='fl' title="关联" ><img src="../../static/img/new/关联.png"/></a>
                                    <a class='fl' title="新增资源" ><img src="../../static/img/new/新增资源2.png"/></a>
                                    <a class='fl' title="更多" ><img src="../../static/img/new/更多.png"/></a>
                                </div>
                            </div>
                            <div class="ml20" v-show="submenu.show" v-for="sub in submenu.submenu"  :key='sub.menuId' @click.stop="clickMenuItem(sub, submenu.submenu)">
                                <div class="fullWidth son">
                                    <p class="fl sonL ml10"> {{$t(sub.translate)}}</p>
                                    <div class="fr sonR" style="width: 44%;">
                                        <a class='fl' title="关联" ><img src="../../static/img/new/操作映射.png"/></a>
                                        <a class='fl' title="新增资源" ><img src="../../static/img/new/反序列化器.png"/></a>
                                        <a class='fl' title="更多" @mouseover="testShow = true" >
                                            <img src="../../static/img/new/更多.png"/>
                                            <img src="../../static/img/top-arrow.png" class="top-arrow" v-show="testShow" style="z-index=100;margin-left:-20px;">
                                        </a>
                                        <div class="secondOpt" v-show="testShow" @mouseleave="testShow = false" >
                                            <a class='fl' title="修改" @click="editOS()"><img src="../../static/img/new/修改.png"/></a>
                                            <a class='fl' title="删除" ><img src="../../static/img/new/删除.png"/></a>
                                            <a class='fl' title="检出" ><img src="../../static/img/new/检出.png"/></a>
                                            <a class='fl' title="全链分析" ><img src="../../static/img/new/全链分析.png"/></a>
                                            <a class='fl' title="血缘分析" ><img src="../../static/img/new/血缘分析.png"/></a>
                                            <a class='fl' title="影响分析" ><img src="../../static/img/new/影响分析.png"/></a>
                                        </div>
                                    </div>
                                </div>
                                <div v-show="sub.show" class="fullWidth ml20 son" v-for="s in sub.submenu"  :key='s.menuId' @click.stop="clickMenuItem(s)">
                                    <div>
                                        <p class="fl sonL ml5"> {{$t(s.translate)}}</p>
                                        <div class="fr sonR" style="width: 42%;">
                                            <a class='fl' title="发布" ><img src="../../static/img/new/发布-(2).png"/></a>
                                            <a class='fl' title="更多" @mouseover="testShow1 = true" >
                                                <img src="../../static/img/new/更多.png"/>
                                                <img src="../../static/img/top-arrow.png" class="top-arrow" v-show="testShow1" style="z-index=100;margin-left:-20px;">
                                            </a>
                                            <div v-show="testShow1" class="secondOpt" style="margin-left: -3px;" @mouseleave="testShow1 = false">
                                                <a class='fl' title="修改" @click="editOS()"><img src="../../static/img/new/修改.png"/></a>
                                                <a class='fl' title="删除" ><img src="../../static/img/new/删除.png"/></a>
                                                <a class='fl' title="检出" ><img src="../../static/img/new/检出.png"/></a>
                                                <a class='fl' title="回退历史版本" ><img src="../../static/img/new/回退历史版本.png"/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </dl>
                </div>

            </div>
        </div>
    </div>
</nav>
</template>
<script>
import  $ from 'jquery'
import Vue from 'vue'

function dealRes(res) {
    _.forEach(res, function (item, index) {
        if (index === 0) {
            item['show'] = true;
        } else {
            item['show'] = false;
        }
        if (item.submenu.length > 0) {
            dealRes(item.submenu);
        }
    });
    
    return res;
}

export default {
    name: 'sideMenu',
    data () {
        return {
            selected: '管理',
            testShow: false,
            testShow1: false,
            menuSwitch: false,
            showSubmenu: false,
            topMenu: [
                {
                    name: 'sidebar.initMenu.design',
                    id: '1',
                    menus: [],
                    show: true
                },
                {
                    name: 'sidebar.initMenu.release',
                    id: '2',
                    menus: [],
                    show: false
                },
                {
                    name: 'sidebar.initMenu.deploy',
                    id: '3',
                    menus: [],
                    show: false
                },
                {
                    name: 'sidebar.initMenu.manage',
                    id: '4',
                    menus: [],
                    show: false
                },
            ],
            
        }
    },
    created () {
        var  _this = this;
                
        this.$taber.$on('vue-tabs-active-change', (tab) => {
            if (tab) {
                this.selected = tab.meta.menuId
            } else {
                this.selected = null
            }
        })


        $.getJSON('../static/getMenu.copy.json', function(json) {
            var res = json.root.response_body;
            _this.topMenu[0].menus = dealRes(res);

            _this.$taber.open({
                name: 'home'
            })
        });
    },
    methods: {
        editOS: function() {
            this.$taber.open({
                name: 'roleManage'
            })
        },
        toggleSubmenu: function (item, target) {
            console.log(item.text,item.show);
            Vue.set(item, 'show', this.show = !this.show);
            if (item.show) {
                _.forEach(target, function (temp) {
                    if (_.has(temp, 'menuId')) {
                        if (temp.menuId !== item.menuId) {
                            Vue.set(temp, 'show', false);
                        }
                    } 
                    if (_.has(temp, 'id')) {
                        if (temp.id !== item.id) {
                            Vue.set(temp, 'show', false);
                        }
                    }
                });
            }
        },
        clickMenuItem (item, target) {
            if (_.isEmpty(target)) {
                this.$taber.open({
                    name: item.sref
                })
            } else {
                this.$taber.open({
                    name: item.sref
                })
                this.toggleSubmenu(item, target);
            }
        }
    }
}
</script>
<style lang="less">
.fullWidth {
    width: 100%;
}

.side-menu {
    position: fixed;
    width: 200px;
    height: 100%;
    left: 0px;
    top: 50px;
    background-color: #151516;
    color: #a7b1c2;

    .nav {
        list-style: none;
        padding: 0px;
        
        >li {
            height: 30px;
        }

        > li.active {
            color: #fff;
        }

        > li > a {
            &:hover {
                cursor: pointer;
                color: #fff;
            }
        }
    }
}

.nav dt {
    padding-left: 10px;
}
            
.topMenu {
    height: 32px;
    font-size: 16px;
    margin-top:3px;
}
.menuTab {
    height: 30px;
    width: 46px;
    background: #eaedf4;
    color: black;
    float: left;
    font-size: 14px;
    margin-left: 3px;
    line-height: 30px;
    text-align: center;
}
.topMenu div:hover {
    background: #5a5866;
    color: white;
    cursor: pointer;
}

.topMenu .active {
    background: #5a5866;
    color: white;
}

.search-pannel input{
    padding-left: 35px;
    background: url(../../static/img/icon-search.png) no-repeat 10px center;
    border: solid 1px #ddd;
    border-radius: 5px 0 0 5px;
    border-right: 0;
    line-height: 34px;
    height: 32px;
    width: 145px;
    background-color: white;
}

.search-pannel button{
    background: #5a5866;
    color: #fff;
    height: 34px;
    line-height: 34px;
    border: none;
    padding: 0 5px;
    border-radius: 0 5px 5px 0;
    position: relative;
    left: -5px;
    width: 50px;
}

.sonL{
    width: 45%;
}

.son {
    height: 40px;
    line-height: 40px;
}

.sonR {
    width: 40%;
}
.sonR a {
    margin-left: 4px;
}

.secondOpt {
    margin-left: 20px;
    margin-top: 25px;
    background: #f7f7ff;
    height: 80px;
    width: 79px;
    border: 1px solid #dcd0d0;
    z-index: 100;
    position: fixed;
}
</style>