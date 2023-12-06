<template>
  <HomeHeader />

  <div v-if="article !== null" class="grid-container">
    <div :style="{ 'background-image': 'url(' + article.avatar.content + ')' }"
      style="width: 100%; height: 200px;"
    >
    </div>
    <div>
      <h1 id="title">{{ article.title }}</h1>
      <p id="subtitle">
        本文由 {{ article.author.username }} 发布于 {{ formatted_time(article.created) }}
        <span v-if="isSuperuser">
          <!-- <router-link :to="{ name: 'ArticleEdit', params: { id: article.id } }">更新与删除</router-link> -->
          更新与删除
        </span>
      </p>
      <div v-html="article.body_html" class="article-body"></div>
    </div>
    <div>
      <h3>目录</h3>
      <div v-html="article.toc_html" class="toc"></div>
    </div>
  </div>



  <!-- <Comments :article="article" /> -->

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
