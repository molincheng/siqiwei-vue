import { createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

import home from '@/pages/home'
import mszz from '@/pages/mszz'
import system from '@/pages/system'
import mfcp from '@/pages/mfcp'
import rhsk from '@/pages/rhsk'
import about from '@/pages/about'

const route= createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path:'/',
            component:home
        },
        {
            path:'/mszz',
            component:mszz
        },
        {
            path:'/system',
            component:system
        },
        {
            path:'/mfcp',
            component:mfcp
        },
        {
            path:'/rhsk',
            component:rhsk
        },
        {
            path:'/about',
            component:about
        }
    ]
})



export default route