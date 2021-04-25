<template>
  <div class="welcome">
    <img src="../../assets/pic.jpg" alt="" />
    <h3 v-show="this.welcome.title.visible">{{ welcome.subtitle.content }}</h3>
    <h1 v-show="this.welcome.subtitle.visible">
      {{ welcome.title.content | upperCase }}
    </h1>
    <el-button
      type="primary"
      icon="el-icon-plus"
      circle
      @click="welcomeData"
    ></el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //本页数据 welcome
      welcome: {
        title: {
          id: 1,
          content: 'Dreamer',
          name: "TITLE",
          visible: true
        },
        subtitle: {
          id: 2,
          content: 'Your Go-To Source',
          name: "SUBTITLE",
          visible: true
        }
      },
      asideTitle: 'Welcome'
    }
  },
  methods: {
    //给sidebar传数据
    welcomeData() {
      this.$emit('parents', this.welcome, this.asideTitle)
      this.$emit('showAside')
    }
  }
}
</script>


<style lang="less" scoped>
.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 50px;
  color: #fff;
  h1 {
    margin: 10px;
    color: #86e8af;
    font-size: 50px;
    font-family: Anton;
    letter-spacing: 2px;
  }
  h3 {
    margin-bottom: 0;
    font-style: italic;
  }
  img {
    width: 90%;
  }
  .el-button {
    position: absolute;
    bottom: -10px;
    z-index: 9;
  }
}
</style>