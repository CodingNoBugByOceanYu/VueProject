<template>
    <form name="userForm" class="ui-dialog-form">
        <div class="pdArround">
            <div class="bor-header">
                <h4>{{$t("base.user.info.ACCOUNTINFO")}}</h4>
            </div>
            <table width="100%" class="table-info05 mgt-20">
                <colgroup>
                    <col width="70px">
                </colgroup>
                <tr>
                    <th valign="top">
                        <span class="mgr-5 needMark">*</span>
                        <span>{{$t("base.user.info.tips.ACCOUNT")}}:</span>
                    </th>
                    <td>
                        <input class="input" name="account"
                            v-model="obj.account"
                            v-validate.initial="'required'"
                            :class="{'input': true, 'is-danger': errors.has('account') }"
                            type="text"
                            :placeholder="$t('tip.input.info')">                                    
                        <span v-show="errors.has('account')" class="help is-danger"> {{$t("base.user.info.tips.ACCOUNTTIP")}} </span>
                    </td>
                </tr>
            </table>
            <div class="bor-header mgt-20">
                <h4>{{$t("base.user.info.PERSONALINFO")}}</h4>
            </div>
            <table width="100%" class="table-info05">
                <colgroup>
                    <col width="70px">
                </colgroup>
                <tr>
                    <th valign="top">
                        <span class="mgr-5 needMark">*</span>
                        <span> {{$t("base.user.info.REALNAME")}}:</span>
                    </th>
                    <td>
                        <input class="input" name="name"
                            v-model="obj.realName"
                            v-validate.initial="'required'"
                            :class="{'input': true, 'is-danger': errors.has('name') }"
                            type="text"
                           :placeholder="$t('tip.input.name')">                                    
                    </td>
                </tr>
            </table>
            <div class="bor-header mgt-20">
                <h4>{{$t("base.user.info.CONTACTINFO")}}</h4>
            </div>
            <table width="100%" class="table-info05 mgt-20">
                <colgroup>
                    <col width="70px">
                </colgroup>
                <tr>
                    <th valign="top">
                        <span class="mgr-5 needMark">*</span>
                        <span>{{$t("base.user.info.PHONE")}}:</span>
                    </th>
                    <td>
                        <input class="input"
                            data-vv-name="telphone"
                            v-model="obj.phoneNo"
                            v-validate.initial="'phone|required'"
                            :class="{'input': true, 'is-danger': errors.has('telphone') }"
                            type="text"
                            data-vv-delay="500"
                            :placeholder="$t('tip.input.phone')">
                        <span v-show="errors.has('telphone')" class="help is-danger"> {{ errors.first('telphone') }}</span>
                    </td>
                </tr>
                <tr>
                    <th valign="top">
                        <span class="mgr-5 needMark">*</span>
                        <span>{{$t("base.user.info.mail")}}:</span>
                    </th>
                    <td>
                        <input class="input"
                            data-vv-as="mail"
                            name="mail"
                            v-model="obj.mail"
                            v-validate="'required|email'"
                            :class="{'input': true, 'is-danger': errors.has('mail') }"
                            type="text"
                            data-vv-delay="500"
                            placeholder="请输入其他">
                        <span v-show="errors.has('mail')" class="help is-danger"> {{ errors.first('mail') }}</span>
                    </td>
                </tr>
                <tr>
                    <th valign="top">
                        <span>{{$t("base.user.info.multiple")}}:</span>
                    </th>
                    <td>
                        <mu-select-field v-model="obj.game2" multiple>
                            <mu-menu-item value="1" title="阴阳师"/>
                            <mu-menu-item value="2" title="影之刃"/>
                            <mu-menu-item value="3" title="天下HD"/>
                            <mu-menu-item value="4" title="穿越火线"/>
                            <mu-menu-item value="5" title="英雄联盟"/>
                            <mu-menu-item value="6" title="王者荣耀"/>
                        </mu-select-field>
                    </td>
                </tr>
                <tr>
                    <th valign="top">
                        <span>{{$t("base.user.info.single")}}:</span>
                    </th>
                    <td>
                        <mu-select-field v-model="obj.game3" >
                        <mu-menu-item value="1" title="阴阳师"/>
                        <mu-menu-item value="2" title="影之刃"/>
                        <mu-menu-item value="3" title="天下HD"/>
                        <mu-menu-item value="4" title="穿越火线"/>
                        <mu-menu-item value="5" title="英雄联盟"/>
                        <mu-menu-item value="6" title="王者荣耀"/>

                        
                    </mu-select-field>
                    </td>
                </tr>
                <tr>
                    <th valign="top">
                        <span>{{$t("base.user.info.radio")}}:</span>
                    </th>
                    <td>
                        <RadioGroup v-model="obj.radioValue">
                            <Radio label="apple">
                                <Icon type="social-apple"></Icon>
                                <span>Apple</span>
                            </Radio>
                            <Radio label="android">
                                <Icon type="social-android"></Icon>
                                <span>Android</span>
                            </Radio>
                            <Radio label="windows">
                                <Icon type="social-windows"></Icon>
                                <span>Windows</span>
                            </Radio>
                        </RadioGroup>
                    </td>
                </tr>
                <tr>
                    <th valign="top">
                        <span>{{$t("base.user.info.time")}}:</span>
                    </th>
                    <td>
                        <!-- <datetime
                            type="datetime"
                            v-model="obj.datetimeEmpty"
                            input-class="input"
                            zone="Asia/Shanghai"
                            :phrases="{ok: '继续', cancel: '退出'}"
                            :hour-step="1"
                            :minute-step="1"
                            :week-start="7"
                            placeholder="请选择时间"
                            >
                        </datetime> -->
                        <DatePicker type="date" v-model="obj.dateEmpty" placeholder="Select date" style="width: 200px"></DatePicker>
                        <TimePicker type="time" v-model="obj.timeEmpty" placeholder="Select time" style="width: 168px"></TimePicker>
                    </td>
                </tr>
                <tr>
                    <th valign="top">
                        <span>{{$t("base.user.info.switch")}}:</span>
                    </th>
                    <td>
                        <mu-switch label="开关" class="demo-switch" />
                    </td>
                </tr>
            </table>
        </div>
        <button @click="closeTab()" class="btn btn-blue" style="margin-left: 40%;"> {{$t("base.user.info.save")}} </button>
        <button @click="showData()" class="btn btn-blue"> {{$t("base.user.info.result")}} </button>
    </form>
</template>

<script>
export default {
    name: 'addRole',
    data: function () {
        return {
            obj: {
                realName: '余海',
                account: 'hugh',
                phoneNo: '17629212619',
                mail: '1017482155@qq.com',
                game3: '4',
                game2: ['1','2'],
                radioValue: 'simple1',
                datetimeEmpty: '1990-06-19T08:30:09.516Z'
            }
        };
    },
    methods: {
        closeTab: function() {
            this.$taber.close({
                name: 'addRole'
            })
        },
        showData() {
            console.log(this.obj);
            debugger;
        }
    }
}

</script>
<style>
.needMark {
    color:red;
    vertical-align:middle;
    font-size:15px
}
.pdArround{
    padding: 15px;
    font-size: 12px;
}

.input.is-danger, .textarea.is-danger {
    border-color: #ff3860;
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
.textarea {
    width: 100%;
}

.mu-menu-destop .mu-menu-item-wrapper,
.mu-dropDown-menu,
.mu-radio-label{
    font-size: 12px;
}

.mu-radio-ripple-wrapper {
    width: 30px;
    height: 20px;
    top: 0px;
    left: -4px;
}
.mu-radio-icon {
    width: 20px;
    height: 20px;
    margin-right: 6px;
}
.mu-radio-svg-icon{
    width: 20px;
    height: 20px;
}

</style>
    