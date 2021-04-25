import Vue from "vue";
import {
  Button,
  Container,
  Aside,
  Main,
  Input,
  Row,
  Col,
  Scrollbar,
  Message,
} from "element-ui";

Vue.use(Button);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Input);
Vue.use(Row);
Vue.use(Col);
Vue.use(Scrollbar);

Vue.prototype.$message = Message;
