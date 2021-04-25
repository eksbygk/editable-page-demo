<template>
  <div class="about">
    <i class="el-icon-ship"></i>
    <!-- <h1>GETTING STARTED</h1> -->
    <h1 v-show="this.about.title.visible">
      {{ about.title.content | upperCase }}
    </h1>
    <h3 v-show="this.about.subtitle.visible">{{ about.subtitle.content }}</h3>
    <p v-show="this.about.description.visible">
      {{ about.description.content }}
    </p>
    <el-button
      type="primary"
      circle
      @click="aboutData"
      icon="el-icon-plus"
    ></el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      about: {
        title: {
          id: 1,
          content: 'Getting Started',
          name: "TITLE",
          visible: true
        },
        subtitle:
        {
          id: 2,
          content: 'The Roots',
          name: "SUBTITLE",
          visible: true
        },
        description:
        {
          id: 3,
          content: `For years, I have served as a useful source to those seeking inspiration,help,or advice. In 2000,I finally decided to own that role and be intentional about it. I started writing about my passions,my thoughts,and curious wonderings about our society. I founded dreamer with a mission to give others a taste of what goes on in my mind, and it has been a wild success ever since.`,
          name: "DESCRIPTION",
          visible: true
        }
      },
      //给Sidebar侧边的标题
      asideTitle: 'About'

    }
  },
  methods: {
    aboutData() {
      //给sidebar传数据
      this.$emit('parents', this.about, this.asideTitle)
      this.$emit('showAside')
    }
  },
  created() {
  }
}
</script>

<style lang="less" scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 70px 50px;
  background-color: #86e8af;
  color: #171011;
  .el-icon-ship {
    margin: 20px 0 0;
    font-size: 50px;
  }
  h1 {
    margin: 10px 0;
    font-size: 70px;
    font-family: Anton;
    letter-spacing: 2px;
  }
  h3 {
    margin: 0;
    font-style: italic;
  }
  p {
    text-align: center;
  }
  .el-button {
    position: absolute;
    bottom: -20px;
    z-index: 9;
  }
}

@media (max-width: 500px) {
  .about {
    h1 {
      font-size: 40px;
    }
  }
}
</style>