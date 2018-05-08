<template>
  <div class="pdArround">
   <div class="clearfix mgt-20">
      <div class="fl search-sty01">
         <input type="text" style="color:#999" class="ipt-click js_ipt_click">
         <button class="btn">{{$t("message.op.type.QUERY")}}</button>
      </div>
      <div class="fr">
         <button class="btn btn-green mgl-10" @click="addRole()"> {{$t("message.op.type.ADD")}} </button>
      </div>
   </div>
   <table width="100%" class="table-info02 mgt-15 table-hover js_tab_list01">
      <colgroup>
         <col width="5%">
         <col width="25%">
         <col width="20%">
         <col width="35%">
         <col width="15%">
      </colgroup>
      <thead>
         <tr>
            <th class="tc">
               <a class="icon-check js_check_box"></a>
            </th>
            <th>{{$t("table.head.name")}}</th>
            <th>{{$t("table.head.statu")}}</th>
            <th>{{$t("table.head.desc")}}</th>
            <th>{{$t("table.head.operate")}}</th>
         </tr>
      </thead>
      <tbody>
         <tr v-if="!roles || roles.length == 0">
            <td colspan="5">
               <div class="no-content tc">
                  <span>{{$t("message.hint.EMPTY")}}</span>
                  <a @click="queryRoles()" class="mgl-5 mgr-5">{{$t("message.op.type.QUERY")}}</a>～
                </div>
            </td>
         </tr>
         <tr v-if="roles &amp;&amp; roles.length &gt; 0" v-for="role in roles" :key='role.id'>
            <td class="tc">
               <a class="icon-check js_check"></a>
            </td>
            <td>{{ role.roleName }}</td>
            <td>{{ role.roleStatusName }}</td>
            <td>{{ role.roleDescription }}</td>
            <td>
               <a @click="editRoles(role.roleId)" class="icon-operation operation-editor js_title_w"></a>
               <a @click="delRoles(role.roleId)" class="icon-operation operation-del js_title_w"></a>
               <a @click="addPrivilege(role.roleId)" class="icon-operation operation-limit js_title_w"></a>
            </td>
         </tr>
      </tbody>
   </table>
</div>
</template>

<script>
export default {
    name: 'RoleManage',
    data: function () {
        return {
            aaa: '2222',
            roles: [
                {
                    id: 1,
                    roleName: 'admin',
                    roleStatusName: '启用',
                    roleDescription: 'XXXXXXXXXXXXXXXXX'
                },
                {
                    id: 2,
                    roleName: '菜单管理员',
                    roleStatusName: '启用',
                    roleDescription: '1234567890'
                }
            ]
        }
    },
    methods: {
        addRole: function () {
            this.$taber.open({
                name: 'addRole'
            })
        }
    }
}
</script>
<style>
.pdArround{
    padding: 15px;
}
</style>

