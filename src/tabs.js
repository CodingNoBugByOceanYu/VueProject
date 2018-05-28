import WorkSpace from '@/components/workSpace'
import UserProfile from '@/components/UserProfile'
import roleManage from '@/components/roleManage'
import addRole from '@/components/addRole'
import resourceM from '@/components/resourceM'
import plumbComp from '@/components/plumbComP'
import plumbComT from '@/components/plumbComT'
import plumbComS from '@/components/plumbComS'
import testDragDrop from '@/components/testDragDrop'

export default [
    {
        name: 'home',
        title: '首页', 
        component: WorkSpace
    },
    {
        name: 'userManage',
        title: '系统名称1',
        component: UserProfile
    },
    {
        name: 'roleManage',
        title: '系统名称2',
        component: roleManage
    },
    {
        name: 'addRole',
        title: '添加角色',
        component: addRole 
    },
    {
        name: 'subject',
        title: '源数据管理',
        component: resourceM
    },
    {
        name: 'Jsplumb',
        title: '测试插件',
        component: plumbComp
    },
    {
        name: 'taskDevelop',
        title: '作业开发1',
        component: plumbComT 
    },
    {
        name: 'taskDevelop1',
        title: '作业开发2',
        component: plumbComS
    },
    {
        name: 'testDragDrop',
        title: '测试拖拽',
        component: testDragDrop
    }
]