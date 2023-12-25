<template>
  <HomeHeader />

  <!-- 文章存在 -->
  <div v-if="article !== null">
    <div class="container-fluid px-0 text-center">
      <div class="topImage" :style="{ 'background-image': 'url(' + article.avatar.content + ')' }">
        <!-- 图片 -->
      </div>

    </div>
    <div class="container-lg">
      <div class="row py-2 py-md-2 mt-5">
        <div class="col-9">
          <div class="container px-0 border border-light-subtle rounded">
            <div class="row text-center">
              <!-- 题头 -->
              <h1>{{ article.title }}</h1>
              <div>
                <span>
                  本文由 {{ article.author.username }} 发布于 {{ formatted_time(article.created) }}
                </span>
                <span>  更新于 {{ formatted_time(article.updated) }}</span>
                <span v-if="isSuperuser">
                  <!-- <router-link :to="{ name: 'ArticleEdit', params: { id: article.id } }">更新与删除</router-link> -->
                  更新与删除
                </span>
              </div>
              <div>
                <span>分类：</span>
                <span v-if="article.category !== null">
                  {{ article.category.title}}
                </span>
                <!-- <div class="vr"></div> -->
                <span>标签：</span>
                <span v-for="tag in article.tags" v-bind:key="tag" class="mx-1">
                  {{ tag }}
                </span>
              </div>
              
            </div>
            <hr class="border border-primary border-3 opacity-75">
            <div class="row">
              <div class="col align-self-start">
                <div v-html="article.body_html" class="article-body"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3 ">
          <div class="border border-light-subtle rounded">
            <h3>目录</h3>
            <hr class="border border-primary border-3 opacity-75">
            <div v-html="article.toc_html" class="toc"></div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <HomeFooter />
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue'
import HomeFooter from '@/components/HomeFooter.vue'
import articleImage from '@/composables/articleImage.js'

import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

export default {
  name: 'BlogDetail',
  components: { HomeHeader, HomeFooter },

  data: function () {
    return {
      article: null
    }
  },
  mounted () {
    axios
      .get('/api/article/' + this.$route.params.id)
      .then(response => (this.article = response.data))
  },
  methods: {
    formatted_time: function (iso_date_string) {
      const date = new Date(iso_date_string)
      return date.toLocaleDateString()
    }
  },
  computed: {
    isSuperuser () {
      return localStorage.getItem('isSuperuser.myblog') === 'true'
    }
  },
}
</script>

<style scoped>
.topImage{
  width: 100%;
  height: 300px;
  background-size: cover;
  display: flex;
  background-position: center;
  background-repeat: no-repeat;
}
</style>