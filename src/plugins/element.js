import Vue from 'vue'
import {
  Container,
  Header,
  Main,
  Footer,
  Form,
  FormItem,
  Col,
  Row,
  Button,
  Input,
  Message
} from 'element-ui'

Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Col)
Vue.use(Row)
Vue.use(Button)
Vue.use(Input)
// 全局挂载！
Vue.prototype.$message = Message
