<template>
  <div class="home">
    <el-container>
      <!-- 侧边栏 -->
      <transition name="slide-in">
        <el-aside width="400px" v-show="isShow">
          <!-- 侧标题 -->
          <el-row>
            <el-col :span="23">
              <h4>{{ asideTitle }}</h4>
            </el-col>
            <el-col :span="1"
              ><i class="el-icon-close" @click="closeAside"></i
            ></el-col>
          </el-row>

          <!-- 修改框 -->
          <div class="editItem" v-for="subItem in childData" :key="subItem.id">
            <el-row>
              <el-col :span="23">
                <h5>{{ subItem.name }}</h5>
              </el-col>
              <el-col :span="1">
                <div class="icon" @click="subItem.visible = !subItem.visible">
                  <i class="el-icon-success" v-show="subItem.visible"></i>
                  <i class="el-icon-error" v-show="!subItem.visible"></i>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-input type="textarea" autosize v-model="subItem.content">
              </el-input>
            </el-row>
          </div>
        </el-aside>
      </transition>

      <!-- 主体区 -->
      <el-main>
        <el-scrollbar style="height: 100%">
          <Header @parents="getChildData" @showAside="showAside"></Header>
          <About @parents="getChildData" @showAside="showAside"></About>
          <Welcome @parents="getChildData" @showAside="showAside"></Welcome>
        </el-scrollbar>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from './content/Header.vue'
import About from './content/About.vue'
import Welcome from './content/Welcome.vue'
export default {
  components: {
    Header,
    About,
    Welcome
  },
  data() {
    return {
      //Content那边组件的数据
      childData: {},
      asideTitle: '',
      //侧边栏
      isShow: true
    }
  },
  methods: {
    getChildData(inData, asideTitle) {
      this.childData = inData
      this.asideTitle = asideTitle
    },
    //关闭侧边栏
    closeAside() {
      this.isShow = false
      this.$message.success('点击“+”可再次编辑')
    },
    //打开侧边栏 此方法用来传给子组件
    showAside() {
      this.isShow = true
    }
  }
}
</script>

<style lang="less" scoped>
//过渡
.slide-in-leave-active {
  animation: slide 0.5s reverse;
}
.slide-in-enter-active {
  animation: slide 0.5s;
}

@keyframes slide {
  0% {
    opacity: 0;
    width: 0;
  }
  100% {
    opacity: 0;
    // transform: translateX(-400px);
    width: width;
  }
}

.home {
  height: 100%;
}

.el-container {
  height: 100%;
}

.el-aside {
  padding: 30px 20px 0;
  // animation: slide 1s ease-in;
  h4 {
    margin: 0;
  }

  .el-icon-close {
    cursor: pointer;
  }

  .el-icon-close:hover {
    color: #409eff;
  }

  .editItem {
    margin: 20px 0;
    border-bottom: 1px solid #ccc;
    text-align: left;

    h5 {
      // float: left;
      margin: 5px;
      font-weight: 400;
      color: #409eff;
    }
    .icon {
      cursor: pointer;
      .el-icon-success {
        color: #409eff;
      }
      .el-icon-error {
        color: #ccc;
      }
    }
  }
}

.el-main {
  background-color: #131210;
  padding: 0;
}
</style>