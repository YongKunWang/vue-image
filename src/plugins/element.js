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
  Message,
  Avatar,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  MenuItem,
  Tabs,
  TabPane,
  Card,
  Table,
  TableColumn,
  Tooltip,
  Tag,
  MessageBox,
  Dialog,
  Select,
  Option
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
Vue.use(Avatar)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tooltip)
Vue.use(Tag)
Vue.use(Dialog)
Vue.use(Select)
Vue.use(Option)
// 全局挂载！
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
