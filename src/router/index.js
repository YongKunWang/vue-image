import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('views/login/Login')
const Home = () => import('views/home/Home')
const PanelManagement = () => import('views/panelManagement/PanelManagement')
const RealtimeDetection = () => import('views/realtimeDetection/RealtimeDetection')
const HistoryQuery = () => import('views/historyQuery/HistoryQuery')
const InformationStatistics = () => import('views/informationStatistics/InformationStatistics')

const HistoryPage = () => import('views/historyQuery/historyPage')

Vue.use(VueRouter)

const routes = [
  { path: '', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    redirect: '/realtimeDetection',
    children: [
      { path: '/panelManagement', component: PanelManagement },
      { path: '/realtimeDetection', component: RealtimeDetection },
      {
        path: '/historyQuery',
        component: HistoryQuery,
        children: [{ path: '/historyQuery-271', component: HistoryPage }]
      },
      { path: '/informationStatistics', component: InformationStatistics }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
