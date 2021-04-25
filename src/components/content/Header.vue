<template>
  <div>
    <!-- 1. 导航 暂时点不动 -->
    <nav>
      <a href="javascript:;" style="color: #86e8af">Home</a>
      <a href="javascript:;">Book</a>
      <a href="javascript:;">Online</a>
      <a href="javascript:;">About</a>
    </nav>

    <!-- 2. 内容区 -->
    <div class="header">
      <div class="Avatar">
        <img src="../../assets/pic.jpg" alt="" />
      </div>
      <h1 v-show="this.header.title.visible">
        {{ header.title.content | upperCase }}
      </h1>
      <h3 v-show="this.header.subtitle.visible">
        {{ header.subtitle.content }}
      </h3>
      <el-button
        type="primary"
        icon="el-icon-plus"
        circle
        @click="headerData"
      ></el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //本页数据 header
      header: {
        title: {
          id: 1,
          content: 'Dreamer',
          name: "TITLE",
          visible: true
        },
        subtitle: {
          id: 2,
          content: 'here I Am',
          name: "SUBTITLE",
          visible: true
        }
      },
      asideTitle: 'Header'
    }
  },
  methods: {
    //给sidebar传数据
    headerData() {
      this.$emit('parents', this.header, this.asideTitle)
      this.$emit('showAside')
    }
  },
  created() {
    this.headerData()
  }
}
</script>

<style lang="less" scoped>
nav {
  padding: 30px 100px 0;
  a {
    margin: 15px;
    text-decoration: none;
    color: #fff;
  }

  a:hover {
    color: #86e8af;
  }
}
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 50px;
  color: #fff;
  .Avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    // border: 1px solid pink;
    overflow: hidden;
    img {
      height: 100%;
      transform: translateX(-40%);
    }
  }
  h3 {
    font-weight: 400;
    margin: 0;
  }
  .el-button {
    position: absolute;
    bottom: -20px;
    z-index: 9;
  }
}
</style>